"use client"
import { useState } from 'react';
import Image from "next/image";

export default function Main() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <main className="bg-black min-h-screen font-custom">
                <header className="flex justify-between items-center p-4 sm:p-12">
                    <Image
                        src="/img/logo.png"
                        alt="logo"
                        width={198}
                        height={126}
                    />
                    <input
                        type="text"
                        placeholder="Пошук"
                        className="bg-[#1D1D1D] placeholder-[#757575] text-white p-2 rounded-[30px] w-full sm:w-1/3"
                    />
                    <button 
                        className="sm:hidden text-white"
                        onClick={toggleMenu}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    <div className="hidden sm:flex gap-8">
                        <button className="bg-[#1D1D1D] text-white px-4 py-2 rounded-[30px]">
                            Каталог
                        </button>
                        <button className="bg-[#1D1D1D] text-white px-4 py-2 rounded-[30px]">
                            Кошик
                        </button>
                    </div>
                </header>
                {isMenuOpen && (
                    <div className="sm:hidden bg-[#1D1D1D] p-4 absolute top-0 right-0 w-full h-full z-10">
                        <div className="flex flex-col items-center">
                            <button className="bg-[#1D1D1D] text-white px-4 py-2 rounded-[30px] mb-4">
                                Каталог
                            </button>
                            <button className="bg-[#1D1D1D] text-white px-4 py-2 rounded-[30px]">
                                Кошик
                            </button>
                        </div>
                    </div>
                )}

                <section className="bg-[#1D1D1D] p-10 min-h-[600px] rounded-lg m-4"></section>

                <footer className="p-4">
                    <h2 className="text-xl text-white">Техніка для дому</h2>
                </footer>
            </main>
        </>
    );
}
