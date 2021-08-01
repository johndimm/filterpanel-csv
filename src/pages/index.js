import Main from '../components/Main'
import { useState } from 'react'
import styles from './index.module.css'

const SampleMovie = () => {
	return <pre>{`
title          | The Shawshank Redemption
year           | 1994
decade         | 1990
rated          | R
released       | 14 Oct 1994
runtime        | 142 min
genre          | Crime, Drama
director       | Frank Darabont
writer         | Stephen King (short story ""Rita Hayworth and Shawshank Redemption""), 
                 Frank Darabont (screenplay)
actors         | Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler
plot           | Two imprisoned men bond over a number of years, finding solace and eventual 
                 redemption through acts of common decency.
language       | English
country        | USA
awards         | Nominated for 7 Oscars. Another 19 wins & 30 nominations.
poster         | https://images-na.ssl-images-amazon.com/images/I/71TO64qm%2BbL._AC_SY741_.jpg
ratings_source | Internet Movie Database
ratings_value  | 9.3/10
metascore      | 80
imdbrating     | 9.3
imdbvotes      | 1,825,626
imdbid         | tt0111161
dvd            | 27 Jan 1998
boxoffice      | N/A
production     | Columbia Pictures
website        | N/A
response       | True
tomatourl      | http://www.rottentomatoes.com/m/shawshank_redemption/`}	
		</pre>
}

const SampleOlympic = () => {
return <pre>
	{`
+--------+------+--------+----------+------------+-----------------+--------------+--------+----------------+-------+---------------+
| Season | Year | City   | Sport    | Discipline | Athlete         | Country_code | Gender | Event          | Medal | Country       |
+--------+------+--------+----------+------------+-----------------+--------------+--------+----------------+-------+---------------+
| summer | 2012 | London | Aquatics | Swimming   | PHELPS, Michael | USA          | Men    | 100M Butterfly | Gold  | United States |
+--------+------+--------+----------+------------+-----------------+--------------+--------+----------------+-------+---------------+	
`}
</pre>
}

function MainPage() {
	const [csvBuffer, setCsvBuffer] = useState([])

	const uploadFile = (file) => {
		const reader = new FileReader()
		reader.onload = handleFileRead
		reader.readAsText(file)
	}

	const handleFileRead = (event) => {
		setCsvBuffer(event.target.result)
	}

	if (csvBuffer.length > 0) {
		return <Main csvBuffer={csvBuffer} />
	}

	return (
		<div className={styles.top}>
			<a href='http://localhost:3001/FetchCSV?url=https%3A%2F%2Fquery.data.world%2Fs%2Flt76nsufm5v76w2au4mmkksoh6wu6a'>
				<img src='movies.png' width='100%' />
			</a>
			<h1>Filterpanel</h1>

			<div className={styles.subtitle}>
				automatically generate a filter panel user interface using only a CSV file
			</div>

			<div>
				<div className={styles.public_data}>
					<h2>Public Data</h2>
					<div className={styles.instructions}>Enter the url of a CSV file.</div>
					<form action='/FetchCSV'>
						<span>url:</span>
						<input type='text' name='url'></input>
						<button type='submit'>fetch</button>
					</form>
				</div>

				<div className={styles.private_data}>
					<h2>Private Data</h2>
					<div className={styles.instructions}>Open a CSV file on your computer.</div>
					<form id='fileForm' encType='multipart/form-data' method='post'>
						<input
							id='files'
							type='file'
							onChange={(e) => {
								const f = document.getElementById('fileForm')
								uploadFile(f.elements['files'].files[0])
							}}
						/>
					</form>
				</div>
			</div>

			<div className={styles.article_text}>
				<h2>Public vs Private</h2>
				<p>
					When you open a file on your computer, the data will be read into Filterpanel running on
					your browser but will not be transmitted over the internet.
				</p>
				<p>
					There is no Filterpanel server. There are no accounts. There is no database. Nothing is
					stored. It's just a script.
				</p>
				<p>
					To share a local CSV file as rendered by Filterpanel, you need to make it available on the
					internet using a url. One option is to upload it to data.world.
				</p>

				<h2>Public Data Examples</h2>
				<div>
					<a href='http://localhost:3001/FetchCSV?url=https%3A%2F%2Fquery.data.world%2Fs%2Flt76nsufm5v76w2au4mmkksoh6wu6a'>
						<img src='movies_thumbnail.png' />
					</a>

					<div>
						<span className={styles.item_title}>
							<a href='http://localhost:3001/FetchCSV?url=https%3A%2F%2Fquery.data.world%2Fs%2Flt76nsufm5v76w2au4mmkksoh6wu6a'>
								Movies
							</a>
						</span>
						uses data from IMDB and OMDB, curated by TheMitchWorksPro.  Find out more on{' '}
						<a href='https://data.world/studentoflife/imdb-top-250-lists-and-5000-or-so-data-records'>
							data.world
						</a>
						. Sample record:{' '}<SampleMovie />
					</div>
				</div>

				<div>
					<a href='http://localhost:3001/FetchCSV?url=https%3A%2F%2Fquery.data.world%2Fs%2F45jwacgkggx55n2p3yox4qyiug7n6l'>
						<img src='olympics_thumbnail.png' />
					</a>
					<div>
						<span className={styles.item_title}>
							<a href='http://localhost:3001/FetchCSV?url=https%3A%2F%2Fquery.data.world%2Fs%2F45jwacgkggx55n2p3yox4qyiug7n6l'>
								Olympic Medals
							</a>
						</span>
						uses data released by <a href='https://www.theguardian.com/sport/datablog/2012/jun/25/olympic-medal-winner-list-data#data'>The Guardian</a>, and hosted on <a href='https://www.kaggle.com/the-guardian/olympic-games'>Kaggle</a> and many other sites, covering Olympic medals up to 2014.  Sample record: <SampleOlympic />
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainPage
