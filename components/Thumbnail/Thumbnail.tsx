import React from 'react';
import Image from 'next/image';
import { Movie } from '../../typings';

interface Props {
	movie: Movie;
    // When using firebase
	// movie: Movie |DocumentData;
}

const Thumbnail = ({ movie }: Props) => {
	return (
		<div className="md:min-w-[260px] relative h-28 min-w-[180px] cursor-pointer transition duration-500 ease-out md:h-36 md:hover:scale-125 md:hover:z-20">
			<Image
				src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`}
				className="rounded-sm md:rounded"
				layout="fill"
                objectFit='contain'
			/>
		</div>
	);
};

export default Thumbnail;
