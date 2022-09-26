import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { Movie } from '../../typings';
import Thumbnail from '../Thumbnail/Thumbnail';

interface Props {
	movies: Movie[];
	title: string;
	// When using firebase
	// movie: Movie |DocumentData;
}

const Row = ({ movies, title }: Props) => {
	return (
		<div className="relative h-54 space-y-0.5 pl-4 md:space-y-1 lg:pl-16">
			<h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
				{title}
			</h2>
			<div className="group relative md:-ml-2">
				<ChevronLeftIcon className="thumbnailButton left-2" />
				<div className="flex items-center space-x-1 overflow-x-scroll scrollbar-hide md:ml-2 md:space-x-2.5">
					{movies.map((movie) => (
						<Thumbnail key={movie.id} movie={movie} />
					))}
				</div>
				<ChevronRightIcon className="thumbnailButton right-2" />
			</div>
		</div>
	);
};

export default Row;
