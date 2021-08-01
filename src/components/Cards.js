import { useState } from 'react'
import styles from './Cards.module.css'
import { allKeys } from './Analyze'

export const OneItem = ({ item, setOneItem, setQuery, fieldStats }) => {
	const detail = allKeys(item, fieldStats, setQuery)

	const posterField = fieldStats.cardFields.poster
	const poster = item[posterField]

	return (
		<div className={styles.popup_background} onClick={(e) => setOneItem(null)}>
			<div className={styles.one_item}>
				<img src={poster} onError={(e) => onError(e, item)} />
				<div className={styles.item_details}>{detail}</div>
			</div>
		</div>
	)
}

const onLoad = (e) => {
	// Turn the display back on, in case it was previously
	// and erroneously turned off by onError.
	e.currentTarget.style.display = 'inline-block'
	e.preventDefault()
}

const updatePoster = async (item, posterURL) => {
	if (item.imdbid == null || posterURL == null) return

	const url = `/api/items/poster/update/${item.imdbid}/${encodeURIComponent(posterURL)}`
	const response = await fetch(url)
	const data = await response.json()
}

const fetchOMDBPoster = async (e, item) => {
	const url = `http://www.omdbapi.com/?i=${item.imdbid}&apikey=985c8d27`
	const response = await fetch(url)
	const data = await response.json()
	// updatePoster(item, data.Poster)

	// Set the source of the current item poster that generated the request.
	e.target.src = data.Poster
}


const Card = ({ item, onClick, cardFields, fieldStats, setQuery }) => {
	const [badImage, setBadImage] = useState(false)
	const title = item[cardFields['title']]
	const plot = item[cardFields['plot']]
	const poster = item[cardFields['poster']]

	const detail = allKeys(item, fieldStats, setQuery)

	const onError = (e, item) => {
		// Turn display off, because this may be a bad image link.
		// But it could also something innocuous that actually
		// doesn't prevent the image from displaying.
		e.currentTarget.style.display = 'none'

		// fetchOMDBPoster(e, item)

		e.preventDefault()
		e.target.onerror = null
		setBadImage(true)
	}

	const minimalText = badImage ? (
		<div className={styles.text_card}>
			<div className={styles.item_title}>{title}</div>
			<div className={styles.item_plot}>{plot}</div>
		</div>
	) : null

	return (
		<div className={styles.item_card} onClick={onClick} title={title}>
			<div>
				<img src={poster} onError={(e) => onError(e, item)} onLoad={onLoad} />
				{minimalText}
			</div>
		</div>
	)
}

export const Cards = ({ filteredData, setOneItem, start, end, cardFields, fieldStats, setQuery }) => {
	return (
		<div>
			{filteredData
				.sort((a, b) => b.imdbRating - a.imdbRating)
				.filter((val, idx) => idx < end)
				.map((val, idx) => {
					return (
						<Card
							item={val}
							key={idx}
							onClick={(e) => setOneItem(val)}
							cardFields={cardFields}
							fieldStats={fieldStats}
							setQuery={setQuery}
						/>
					)
				})}
		</div>
	)
}

export default {Cards, OneItem}
