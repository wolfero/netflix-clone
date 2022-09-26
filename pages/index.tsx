import Head from 'next/head';

import Banner from '../components/Banner/Banner';
import Header from '../components/Header/Header';
import Row from '../components/Row/Row';
import { Genre, Movie } from '../typings';
import requests from '../utils/requests';

interface Props {
	fetchGenre: Genre[];
	netflixOriginals: Movie[];
	trendingNow: Movie[];
	topRated: Movie[];
	actionMovies: Movie[];
	comedyMovies: Movie[];
	horrorMovies: Movie[];
	romanticMovies: Movie[];
	documentaries: Movie[];
}

const Home = ({
	fetchGenre,
	netflixOriginals,
	actionMovies,
	comedyMovies,
	documentaries,
	horrorMovies,
	romanticMovies,
	topRated,
	trendingNow,
}: Props) => {
	
	return (
		<div className="relative h-screen overflow-hidden bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
			<Head>
				<title>Home - Netflix Clone By Fero</title>
				<link rel="icon" href="/assets/netflix.ico" />
			</Head>

			<Header />

			<main className="relative">
				<Banner netflixOriginals={netflixOriginals} />
				<section className='relative space-y-5 lg:-top-32'>
					{/* My list */}
					<Row movies={topRated} title="Top rated" />
					<Row movies={trendingNow} title="Trending now" />
					<Row movies={actionMovies} title="Action movies" />
					<Row movies={comedyMovies} title="Comedy movies" />
					<Row movies={horrorMovies} title="Horror movies" />
					<Row movies={romanticMovies} title="Romantic movies" />
					<Row movies={documentaries} title="Documentaries" />
				</section>
			</main>
			{/* Modal */}
		</div>
	);
};

export default Home;

export const getServerSideProps = async () => {
	const [
		fetchGenre,
		netflixOriginals,
		trendingNow,
		topRated,
		actionMovies,
		comedyMovies,
		horrorMovies,
		romanticMovies,
		documentaries,
	] = await Promise.all([
		fetch(requests.fetchGenre).then((res) => res.json()),
		fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
		fetch(requests.fetchTrending).then((res) => res.json()),
		fetch(requests.fetchTopRated).then((res) => res.json()),
		fetch(requests.fetchActionMovies).then((res) => res.json()),
		fetch(requests.fetchComedyMovies).then((res) => res.json()),
		fetch(requests.fetchHorrorMovies).then((res) => res.json()),
		fetch(requests.fetchRomanticMovies).then((res) => res.json()),
		fetch(requests.fetchDocumentaries).then((res) => res.json()),
	]);

	return {
		props: {
			fetchGenre: fetchGenre.genres,
			netflixOriginals: netflixOriginals.results,
			trendingNow: trendingNow.results,
			topRated: topRated.results,
			actionMovies: actionMovies.results,
			comedyMovies: comedyMovies.results,
			horrorMovies: horrorMovies.results,
			romanticMovies: romanticMovies.results,
			documentaries: documentaries.results,
		},
	};
};
