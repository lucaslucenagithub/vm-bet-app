import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)




    return (
        <div>
            <nav className="w-full bg-zinc-800 fixed top-0 left-0 right-0 z-10">
                <div className="justify-between  px-8 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <div className='flex align-center items-center justify-center'>


                            {/* LOGO */}
                            <Link href="/" className='flex items-center justify-center'>
                                {/* <Image src="/coin.svg" width={60} height={60} alt="coin" /> */}
                                <h2 className="text-2xl text-zinc-100 font-bold font-sans">VM-BET</h2>
                            </Link>

                            <div className='w-10'></div>

                            {/* HAMBURGER BUTTON FOR MOBILE */}
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                >
                                    {isMenuOpen ? (
                                        <Image src="/close.svg" width={30} height={30} alt="logo" />
                                    ) : (
                                        <Image
                                            src="/hamburger-menu.svg"
                                            width={30}
                                            height={30}
                                            alt="logo"
                                            color='#fff'
                                            className="focus:border-none active:border-none"
                                        />
                                    )}
                                </button>
                            </div>

                            <div>
                                <div
                                    className={`
                                        flex-1 
                                        mt-7
                                        absolute
                                        bg-zinc-700 
                                        h-32
                                        -translate-x-28
                                        p-5
                                        transition-all duration-200 ${isMenuOpen ? "opacity-100" : "opacity-0"}
                                        border-solid
                                        border-2
                                        border-zinc-700
                                        rounded
                                        md:border-none
                                        md:rounded-none
                                        md:block 
                                        md:mt-0 
                                        md:relative
                                        md:h-auto
                                        md:bg-transparent
                                        md:translate-x-0
                                        md:p-0
                                        md:opacity-100
                                    `}
                                >
                                    <ul className="flex flex-col justify-between min-h-[80px] md:flex-row md:h-auto md:min-h-0">
                                        <li className="text-xs text-start font-sans font-semibold text-zinc-50  md:text-center hover:text-zinc-400">
                                            <Link href="#" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                                APOSTAS ESPORTIVAS
                                            </Link>
                                        </li>
                                        <li className="text-xs text-start font-sans font-semibold text-zinc-50 md:ml-5  md:text-center hover:text-zinc-400">
                                            <Link href="#" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                                APOSTAS AO VIVO
                                            </Link>
                                        </li>
                                        <li className="text-xs text-start font-sans font-semibold text-zinc-50 md:ml-5 md:text-center hover:text-zinc-400">
                                            <Link href="#" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                                APOSTAS FUTURAS
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

