import { useRouter } from 'next/router';
import Main from '../components/Main'

function FetchCSV() {
    const router = useRouter();
	const url = router.query.url;
	const imageBaseUrl = router.query.imageBaseUrl || '';
	if (!url) return null;
		return (
			<div>
				<Main url={url} imageBaseUrl={imageBaseUrl}/>
			</div>
		)

}


export default FetchCSV