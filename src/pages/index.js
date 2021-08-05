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

const Movies = () => {
	return 		( 	
	<div>
		<h3>Movies</h3>
		<a href='/FetchCSV?url=https%3A%2F%2Fquery.data.world%2Fs%2Flt76nsufm5v76w2au4mmkksoh6wu6a'>
			<img src='movies_thumbnail.png' />
		</a>

		<div>
			<ul>
			<li>CSV file from <a href='https://data.world/studentoflife/imdb-top-250-lists-and-5000-or-so-data-records'>data.world</a>
			</li>
			
			<li>
			Uses extracts from IMDB and OMDB, curated by TheMitchWorksPro. 
			</li>
			</ul>
		</div>
	</div>)

}

const Shapes = () => {
	return (
		<div>
			<h3>Shapes</h3>
			<a href='https://filterpanel-example.vercel.app/'><img src='shapes.png'/></a>
			<ul>
				<li>
					Trivial example using a JSON literal as input.
				</li>
				<li>
					Click a few checkboxes and watch how the "in" and "out" masks change.
				</li>
			</ul>
		</div>
	)
}

const OlympicMedals = () => {
	return (
				<div>
					<h3>Olympic Medals</h3>
					<a href='/FetchCSV?url=https%3A%2F%2Fquery.data.world%2Fs%2F45jwacgkggx55n2p3yox4qyiug7n6l'>
						<img src='olympics_thumbnail.png' />
					</a>
					<ul>
						<li>CSV file from <a href='https://data.world/johndimm/olympic-medals-1896-to-2014-in-detail'>data.world</a></li>
						<li>uses data released by <a href='https://www.theguardian.com/sport/datablog/2012/jun/25/olympic-medal-winner-list-data#data'>The Guardian</a></li>
						
						 <li>hosted on <a href='https://www.kaggle.com/the-guardian/olympic-games'>Kaggle</a> and many other sites</li>
						 <li>
						 covers Olympic medals up to 2014
							 </li>
					</ul>
				</div>		
	)
}

const PublicPrivate = () => {
	return (
		<div>
			<h2>Public vs Private</h2>
			<p>
				When you open a file on your computer, the data will be read into Filterpanel running on
				your browser but will not be transmitted over the internet.
			</p>
			<p>
				There is no Filterpanel server. There are no accounts. There is no database. Nothing is
				stored. It's just a script.  The entire CSV file is read on startup every time, either from local storage or the internet.  The second time is faster, because caching.
			</p>
			<p>
				To share a local CSV file as rendered by Filterpanel, you need to make it available on the
				internet using a url. One option is to upload it to data.world.  Another is to send the file to your contacts and ask them to load it into Filterpanel.
			</p>
		</div>
	)
}

const GetLocalFile = () => {
	return (
		<div className={styles.public_data}>
			<h2>Public Data</h2>
			<div className={styles.instructions}>Enter the url of a CSV file.</div>
			<form action='/FetchCSV'>
				<span>url:</span>
				<input type='text' name='url'></input>
				<button type='submit'>fetch</button>
			</form>
		</div>
	)
}



const GitHub = () => {
	return (
		<div>
			<h2 >Github</h2>
			<h3>filterpanel</h3>
            <a href='https://github.com/johndimm/filterpanel'>https://github.com/johndimm/filterpanel</a>
			<div style={{marginTop: "10px"}}>
				The npm package exposes the Filterpanel component.  It takes a JSON array as input.
			</div>
			<br />
			<h3>filterpanel-example</h3>
			<a href='https://github.com/johndimm/filterpanel-example'>https://github.com/johndimm/filterpanel-example</a>
            <div style={{marginTop: "10px"}}>
				A toy example showing how it works.  Data is a JSON literal.
			</div>
			<h3>filterpanel-csv</h3>
            <a href='https://github.com/johndimm/filterpanel-csv'>https://github.com/johndimm/filterpanel-csv</a>
			<div style={{marginTop: "10px"}}>
				This app takes input from CSV files, either from the local system or the internet.  It scans and analyzes the CSV and applies rules to layout the filterpanel.
			</div>
		</div>
	)
}

function MainPage() {
	const [csvBuffer, setCsvBuffer] = useState([])

	const GetNetworkFile = () => {

		const handleFileRead = (event) => {
			setCsvBuffer(event.target.result)
		}
	
		const uploadFile = (file) => {
			const reader = new FileReader()
			reader.onload = handleFileRead
			reader.readAsText(file)
		}
	
		return (
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
		)
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

            <div style={{clear:'both'}}>
            <GetLocalFile />
			<GetNetworkFile />
			</div>

			<div className={styles.article_text}>

				<h2>Examples</h2>
				<Shapes />
				<Movies />
				<OlympicMedals />

				<h2>Sample records</h2>
				<h3>Movie</h3>
				<SampleMovie />
				<h3>Olympic Medal</h3>
				<SampleOlympic />

				<PublicPrivate />
				<GitHub />


			</div>
		</div>
	)
}

export default MainPage
