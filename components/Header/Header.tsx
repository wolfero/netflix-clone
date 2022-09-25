import React, { useEffect, useState } from 'react';
import { BellIcon, MagnifyingGlassIcon as SearchIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

function Header() {
	const [isScrolled, seTisScrolled] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			const windowScroll = window.scrollY > 0;
			windowScroll ? seTisScrolled(true) : seTisScrolled(false);
		};
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header className={`${isScrolled && 'bg-[#141414]'}`}>
			<div className="flex items-center space-x-2 md:space-x-10">
				<img
					src="/assets/NetflixLogo.svg"
					width={100}
					height={100}
					className="cursor-pointer object-contain"
				/>
				<ul className="hidden space-x-4 md:flex">
					<li className="headerLink">Home</li>
					<li className="headerLink">TV Shows</li>
					<li className="headerLink">Movies</li>
					<li className="headerLink">New & Popular</li>
					<li className="headerLink">My List</li>
				</ul>
			</div>
			<div className="flex items-center space-x-4 text-sm font-light">
				<SearchIcon className="hidden h-6 w-6 sm:inline" />
				<p className="hidden lg:inline">Kids</p>
				<BellIcon className="h-6 w-6" />
				<Link href="/account">
					<img
						src="/assets/accountLogo.png"
						alt="Account Logo"
						className="cursor-pointer rounded"
					/>
				</Link>
			</div>
		</header>
	);
}

export default Header;
