import React, { useEffect, useState } from 'react';
import { Movie } from '../../typings';
import { baseUrl } from '../../constants/movie';
import { FaPlay } from 'react-icons/fa';
import { CgInfo } from 'react-icons/cg';

interface Props {
	netflixOriginals: Movie[];
}

const Banner = ({ netflixOriginals }: Props) => {
	const [movie, setMovie] = useState<Movie | null>(null);

	useEffect(() => {
		if (netflixOriginals) {
			const randomMovie = Math.floor(Math.random() * netflixOriginals.length);
			setMovie(netflixOriginals[randomMovie]);
		}
	}, [netflixOriginals]);

	return (
		<>
			{movie ? (
				<div className="relative flex flex-col space-y-2 md:space-y-4 lg:pb-12">
					<img
						className="w-screen brightness-50"
						src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
					/>
					<div className="absolute bottom-5 space-y-2 pl-4 md:bottom-10 lg:bottom-1/4 lg:pl-16 xl:bottom-1/3 2xl:bottom-2/4">
						<h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
							{movie?.title || movie?.name || movie?.original_name}
						</h1>
						<p className="hidden max-w-xs text-xs text-shadow-md md:flex md:max-w-xl md:text-lg lg:max-w-3xl lg:text-2xl xl:max-w-6xl xl:text-4xl">
							{movie?.overview}
						</p>
						<div className="flex space-x-3">
							<button className="bannerButton bg-white text-black">
								<FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
								Play
							</button>
							<button className="bannerButton bg-[gray]/70 md:flex-row">
								<CgInfo className="h-5 w-5 md:h-8 md:w-8" />
								More Information
							</button>
						</div>
					</div>
				</div>
			) : null}
		</>
	);
};

export default Banner;
