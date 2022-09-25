import type { NextPage } from 'next';
import Head from 'next/head';

import Banner from '../components/Banner/Banner';
import Header from '../components/Header/Header';

const Home: NextPage = () => {
	return (
		<div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
			<Head>
				<title>Home - Netflix Clone By Fero</title>
				<link rel="icon" href="/assets/netflix.ico" />
			</Head>

			<Header />

			<main>
				<Banner />
				<section>
					{/* Row */}
					{/* Row */}
					{/* Row */}
					{/* Row */}
					{/* Row */}
					{/* Row */}
					{/* Row */}
				</section>
			</main>
			{/* Modal */}
		</div>
	);
};

export default Home;
