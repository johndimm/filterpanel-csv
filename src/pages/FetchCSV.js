import { useRouter } from 'next/router';
import Main from '../components/Main'

function FetchCSV() {
    const router = useRouter();
	const url = router.query.url;
	if (!url) return null;
		return (
			<div>
				<Main url={url}/>
			</div>
		)

}


export default FetchCSV