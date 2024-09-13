'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/app/assets/images/svg/logo.svg';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';

const navigation = [
    {href: '#about', title: 'Про нас'},
    {href: '#services', title: 'Послуги'},
    {href: '#feedback', title: 'Відгуки'},
    {href: '#gallery', title: 'Галерея'},
    {href: '#contacts', title: 'Контакти'},
];

const button = {
    href: '#contacts',
    title: 'Забронювати',
};

export default function Header() {
    return (
        <header className="flex flex-col items-center">
            <div className='w-full flex justify-between'>
                <Link href="/" className='hover:opacity-80 transition-opacity duration-300'>
                    <Image src={Logo} alt="Voyage Transit" width={290} height={45} />
                </Link>
                <Navbar navigation={navigation}/>
                <Button href={button.href} title={button.title} />
            </div>
            <div className="w-screen h-[1px] bg-[--foreground] opacity-10 mt-10"></div>
        </header>
    );
}

