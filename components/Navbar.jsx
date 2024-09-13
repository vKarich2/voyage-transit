'use client';

import React from 'react';
import Link from 'next/link';

export default function Navbar({navigation}) {
	return (
		<nav className="flex justify-between items-center">
			<ul className="flex items-center gap-10 text-base font-medium">
				{navigation.map((navItem, index) => (
					<li key={index}>
						<Link href={navItem.href}>{navItem.title}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}