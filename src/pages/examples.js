import styles from './examples.module.css'

const examples = [
	{
		title: 'Movies',
		rows: '~5,000',
		filters: 'genre, rated, decade, country, language',
		hasImages: true,
		url: '/FetchCSV?url=https%3A%2F%2Fquery.data.world%2Fs%2Flt76nsufm5v76w2au4mmkksoh6wu6a',
		source: 'data.world',
		sourceUrl: 'https://data.world/studentoflife/imdb-top-250-lists-and-5000-or-so-data-records',
	},
	{
		title: 'Cocktails',
		rows: '546',
		filters: 'category, alcoholic, glass, iba, ingredients',
		hasImages: true,
		url: '/FetchCSV?url=https%3A%2F%2Ffilterpanel-csv.vercel.app%2Fcocktails.csv',
		source: 'TheCocktailDB',
		sourceUrl: 'https://www.thecocktaildb.com/',
	},
	{
		title: 'Horror Movies',
		rows: '~32,000',
		filters: 'language, genre, status, collection',
		hasImages: true,
		url: '/FetchCSV?url=https%3A%2F%2Fraw.githubusercontent.com%2Frfordatascience%2Ftidytuesday%2Fmaster%2Fdata%2F2022%2F2022-11-01%2Fhorror_movies.csv&imageBaseUrl=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500',
		source: 'TidyTuesday / TMDB',
		sourceUrl: 'https://github.com/rfordatascience/tidytuesday/tree/master/data/2022/2022-11-01',
	},
	{
		title: 'Bob Ross Paintings',
		rows: '403',
		filters: 'season, colors, elements (trees, mountains, lake, etc.)',
		hasImages: true,
		url: '/FetchCSV?url=https%3A%2F%2Fraw.githubusercontent.com%2Frfordatascience%2Ftidytuesday%2Fmaster%2Fdata%2F2023%2F2023-02-21%2Fbob_ross.csv',
		source: 'TidyTuesday',
		sourceUrl: 'https://github.com/rfordatascience/tidytuesday/tree/master/data/2023/2023-02-21',
	},
	{
		title: 'Olympic Medals',
		rows: '~8,000',
		filters: 'sport, country, gender, medal, season',
		hasImages: false,
		url: '/FetchCSV?url=https%3A%2F%2Fquery.data.world%2Fs%2F45jwacgkggx55n2p3yox4qyiug7n6l',
		source: 'data.world',
		sourceUrl: 'https://data.world/johndimm/olympic-medals-1896-to-2014-in-detail',
	},
	{
		title: 'Video Game Sales',
		rows: '~16,000',
		filters: 'platform, genre, publisher, year',
		hasImages: false,
		url: '/FetchCSV?url=https%3A%2F%2Fraw.githubusercontent.com%2FAranaur%2Faranaur.rbind.io%2Fmain%2Fdatasets%2Fvideo_games_sales%2Fvgsales.csv',
		source: 'Kaggle / GitHub',
		sourceUrl: 'https://github.com/Aranaur/aranaur.rbind.io/tree/main/datasets/video_games_sales',
	},
	{
		title: 'DC Comics Characters',
		rows: '~6,900',
		filters: 'alignment, eye color, hair color, sex, alive',
		hasImages: false,
		url: '/FetchCSV?url=https%3A%2F%2Fraw.githubusercontent.com%2Ffivethirtyeight%2Fdata%2Fmaster%2Fcomic-characters%2Fdc-wikia-data.csv',
		source: 'FiveThirtyEight',
		sourceUrl: 'https://github.com/fivethirtyeight/data/tree/master/comic-characters',
	},
	{
		title: 'Coffee Ratings',
		rows: '~1,340',
		filters: 'species, country, variety, processing method, color',
		hasImages: false,
		url: '/FetchCSV?url=https%3A%2F%2Fraw.githubusercontent.com%2Frfordatascience%2Ftidytuesday%2Fmaster%2Fdata%2F2020%2F2020-07-07%2Fcoffee_ratings.csv',
		source: 'TidyTuesday',
		sourceUrl: 'https://github.com/rfordatascience/tidytuesday/tree/master/data/2020/2020-07-07',
	},
	{
		title: 'FIFA World Cup Matches',
		rows: '~1,250',
		filters: 'tournament, stage, team, country, stadium',
		hasImages: false,
		url: '/FetchCSV?url=https%3A%2F%2Fraw.githubusercontent.com%2Fjfjelstul%2Fworldcup%2Fmaster%2Fdata-csv%2Fmatches.csv',
		source: 'GitHub',
		sourceUrl: 'https://github.com/jfjelstul/worldcup',
	},
	{
		title: 'Netflix Titles',
		rows: '~7,800',
		filters: 'type, country, rating, listed in, release year',
		hasImages: false,
		url: '/FetchCSV?url=https%3A%2F%2Fraw.githubusercontent.com%2Frfordatascience%2Ftidytuesday%2Fmaster%2Fdata%2F2021%2F2021-04-20%2Fnetflix_titles.csv',
		source: 'TidyTuesday',
		sourceUrl: 'https://github.com/rfordatascience/tidytuesday/tree/master/data/2021/2021-04-20',
	},
	{
		title: 'Spotify Songs',
		rows: '~32,000',
		filters: 'genre, subgenre, artist, playlist',
		hasImages: false,
		url: '/FetchCSV?url=https%3A%2F%2Fraw.githubusercontent.com%2Frfordatascience%2Ftidytuesday%2Fmaster%2Fdata%2F2020%2F2020-01-21%2Fspotify_songs.csv',
		source: 'TidyTuesday',
		sourceUrl: 'https://github.com/rfordatascience/tidytuesday/tree/master/data/2020/2020-01-21',
	},
	{
		title: 'Scooby Doo Episodes',
		rows: '~600',
		filters: 'series, network, season, format, monster type, setting',
		hasImages: false,
		url: '/FetchCSV?url=https%3A%2F%2Fraw.githubusercontent.com%2Frfordatascience%2Ftidytuesday%2Fmaster%2Fdata%2F2021%2F2021-07-13%2Fscoobydoo.csv',
		source: 'TidyTuesday',
		sourceUrl: 'https://github.com/rfordatascience/tidytuesday/tree/master/data/2021/2021-07-13',
	},
]

const ExampleCard = ({ example }) => {
	return (
		<div className={styles.card}>
			<a href={example.url}>
				<h3>{example.title}</h3>
			</a>
			<div className={styles.meta}>
				<span className={styles.rows}>{example.rows} rows</span>
				{example.hasImages && <span className={styles.badge}>has images</span>}
			</div>
			<div className={styles.filters}>
				<b>Filters:</b> {example.filters}
			</div>
			<div className={styles.source}>
				Source: <a href={example.sourceUrl}>{example.source}</a>
			</div>
		</div>
	)
}

function ExamplesPage() {
	return (
		<div className={styles.page}>
			<h1>Filterpanel Examples</h1>
			<p className={styles.subtitle}>
				Click any example to open it in Filterpanel. Datasets with images show a card layout; others show a table.
			</p>
			<div className={styles.grid}>
				{examples.map((ex, idx) => (
					<ExampleCard key={idx} example={ex} />
				))}
			</div>
		</div>
	)
}

export default ExamplesPage
