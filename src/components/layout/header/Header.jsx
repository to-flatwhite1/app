import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white-700 backdrop-blur-md py-3">
            <nav className="flex justify-between items-center">
                <div className="px-5">
                    <Link href="/">
                        <Image
                            className="w-auto h-[30px]"
                            src="/Netflix_2015_logo.svg.png"
                            alt="logo"
                            width={100}
                            height={30}
                        />
                    </Link>
                </div>
            </nav>
        </header>
    );
};
