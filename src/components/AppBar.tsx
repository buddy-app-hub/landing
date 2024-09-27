'use client'

import Image from 'next/image';
import {useEffect, useState} from "react";
import BuddyLogo from '@/assets/buddy_logo.svg';

export default function AppBar() {
    const [scrolling, setScrolling] = useState<boolean>(false);
    const navbarOpen = true;
    // const setNavbarOpen = (newValue: boolean) => console.log(newValue);


    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`fixed top-0 w-full z-30 ${scrolling ? "clearNav-scroll" : "clearNav"} md:bg-opacity-90 transition duration-300 ease-in-out`}>
            <div className="flex flex-col max-w-7xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                <div className="flex flex-row items-center justify-between p-4">
                    <a
                        href="/"
                        className="text-lg font-semibold rounded-lg tracking-widest focus:outline-none focus:shadow-outline"
                    >
                        <Image
                            priority
                            src={BuddyLogo}
                            alt="buddy"
                            width={100}
                        />
                    </a>

                </div>
                <div
                    className={
                        "md:flex flex-grow items-center" +
                        (navbarOpen ? " flex" : " hidden")
                    }
                >
                    <nav className="flex-col flex-grow ">
                        <ul className="flex flex-grow justify-end flex-wrap items-center">
                            <li>
                                <a
                                    href="/"
                                    className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                                >
                                    Quiénes somos
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                                >
                                    Testimonios
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                                >
                                    Preguntas frecuentes
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}