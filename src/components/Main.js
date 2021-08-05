import React, { useEffect, useState } from 'react'
// import FilterPanel from './filterpanel'
import FilterPanel from 'filterpanel'
import styles from './Main.module.css'
import Head from 'next/head'
import * as csv from 'csv-string'
import { scanCSVData, pickFields, allKeys } from './Analyze'
import { Cards, OneItem} from './Cards'
import Rows from './Rows'

const ITEMS_PER_PAGE = 30


const Main = ({ url, csvBuffer }) => {
	const [data, setData] = useState([])
	const [filteredData, setFilteredData] = useState([])
	const [oneItem, setOneItem] = useState(null)
	const [page, setPage] = useState(0)
	const [query, setQuery] = useState('')
	const [spinnerDisplay, setSpinnerDisplay] = useState('block')
	const [filterFields, setFilterFields] = useState([])
	const [counts, setCounts] = useState([])
	const [searchFields, setSearchFields] = useState([])
	const [fieldStats, setFieldStats] = useState({})
	const [cardFields, setCardFields] = useState({})

	const acceptCSVContent = async (content) => {
		const itemArray = await csv.parse(content)

		// Convert array of arrays to array of json
		const header = itemArray[0]
		const jsonArray = itemArray
			.filter((_, idx) => idx > 0)
			.map((record, idx) => {
				let jsonLine = {}
				record.forEach((val, idx) => {
					jsonLine[header[idx]] = val
				})
				return jsonLine
			})

		const fieldStats = scanCSVData(jsonArray)
		const fields = pickFields(jsonArray, fieldStats)

		setCardFields(fields.cardFields)
		setFieldStats(fieldStats)
		setFilterFields(fields.ff)
		setSearchFields(fields.sf)

		setData(jsonArray)
		setFilteredData(jsonArray)

		setCounts(counts)

		setSpinnerDisplay('none')
	}

	const isBottom = (el) => {
		return el.scrollTop + el.clientHeight + 1 > el.scrollHeight
	}

	const onScroll = (e) => {
		const el = e.nativeEvent.srcElement
		if (isBottom(el)) {
			nextPage()
		}
	}

	useEffect(() => {
		if (url) {
			fetchData(url)
		}
		if (csvBuffer && csvBuffer.length > 0) {
			acceptCSVContent(csvBuffer)
		}
	}, [url])

	const nextPage = (e) => {
		setPage(page + 1)
	}

	const fetchData = async (url) => {
		if (url) {
			const res = await fetch(url)
			const restext = await res.text()
			acceptCSVContent(restext)
		}
	}

	const selectedItem = oneItem ? (
		<OneItem
			item={oneItem}
			setOneItem={setOneItem}
			setQuery={setQuery}
			fieldStats={fieldStats}
		/>
	) : null

	const start = page * ITEMS_PER_PAGE
	const end = start + ITEMS_PER_PAGE

	const items = cardFields['poster'] ? (
		<Cards
			filteredData={filteredData}
			counts={counts}
			start={start}
			end={end}
			setOneItem={setOneItem}
			cardFields={cardFields}
			fieldStats={fieldStats}
			setQuery={setQuery}
		/>
	) : (
		<Rows
			filteredData={filteredData}
			counts={counts}
			start={start}
			end={end}
			setOneItem={setOneItem}
			cardFields={cardFields}
			fieldStats={fieldStats}
			setQuery={setQuery}
		/>
	)

	if (data.length === 0)
		return (
			<div className={styles.popup_background} style={{ display: spinnerDisplay }}>
				<div className={styles.spinner}></div>
			</div>
		)

	return (
		<div>
			<Head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=.5, maximum-scale=10.0, minimum-scale=.25, user-scalable=yes'
				/>
			</Head>

			<div className={styles.app} onScroll={onScroll}>
				<div className={styles.filterPanelContainer}>
					<FilterPanel
						originalArray={data}
						callback={setFilteredData}
						query={query}
						filterFields={filterFields}
						searchFields={searchFields}
					/>
				</div>
				<div>
					{items}
					{selectedItem}
				</div>
			</div>
		</div>
	)
}

export default Main
