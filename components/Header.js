import Image from 'next/image'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaSearch} from 'react-icons/fa'
import { MdOutlineClose } from 'react-icons/md'
import {useState} from 'react'
import Link from 'next/link'

function Header() {

    const [isOpen, setisOpen] = useState(false)
    const [menu, setMenu] = useState(false)

    return (
        <nav className='w-full z-50 mb-16'>

        <header className={`h-16 bg-darkblue fixed top-0 w-full flex items-center z-50  `}>
            <div className='px-5 w-full lg:px-10'>
                <div className='flex justify-between items-center w-full'>
                    <div className='lg:flex hidden lg:items-center'>
                        <div className='mr-4'>
                            <Link href="/">
                                <a>
                                    <Image src={'/tmdb.svg'} width={154} height={20} alt='Logo'/>
                                </a>
                            </Link>
                        </div>

                        <ul className='flex text-white font-semibold'>
                            <li className='mr-4 p-2 cursor-pointer group text-base'>
                                Movies
                                <div className='absolute text-[#212529] w-44 bg-white h-[138px] top-12 z-50 rounded-md group-hover:block hidden'>
                                    <ul className='text-base max-h-96 absolute font-normal leading-6 py-2 w-full'>
                                        <li className='py-1 px-6 hover:bg-gray-200'><Link href="/movie/popular">Popular</Link></li>
                                        <li className='py-1 px-6 hover:bg-gray-200'><Link href="/movie/now_playing">Now Playing</Link></li>
                                        <li className='py-1 px-6 hover:bg-gray-200'><Link href="/movie/upcoming">Upcoming</Link></li>
                                        <li className='py-1 px-6 hover:bg-gray-200'><Link href="/movie/top_rated">Top Rated</Link></li>
                                    </ul>                                    
                                </div> 
                            </li>

                            <li className='mr-4 p-2 cursor-pointer group text-base'>
                                TvShows
                                <div className='absolute text-[#212529] w-44 bg-white h-[138px] top-12 z-50 rounded-md group-hover:block hidden'>
                                    <ul className='text-base max-h-96 absolute font-normal leading-6 py-2 w-full'>
                                        <li className='py-1 px-6 hover:bg-gray-200'>Popular</li>
                                        <li className='py-1 px-6 hover:bg-gray-200'>Airing Today</li>
                                        <li className='py-1 px-6 hover:bg-gray-200'>Upcoming</li>
                                        <li className='py-1 px-6 hover:bg-gray-200'>Top Rated</li>
                                    </ul>                                    
                                </div> 
                            </li>

                            <li className='mr-4 p-2 cursor-pointer group text-base'>
                                People
                                <div className='absolute text-[#212529] w-44 bg-white h-12 top-12 z-50 rounded-md group-hover:block hidden'>
                                    <ul className='text-base max-h-12 absolute font-normal leading-6 py-2 w-full'>
                                    <Link href='/person'>
                                         <li className='py-1 px-6 hover:bg-gray-200'>Popular People</li>                                     
                                       </Link>                                    </ul>                                    
                                </div> 
                            </li>

                            <li className='p-2 cursor-pointer group text-base'>
                                More
                                <div className='absolute text-[#212529] w-44 bg-white h-12 top-12 z-50 rounded-md group-hover:block hidden'>
                                    <ul className='text-base max-h-96 absolute font-normal leading-6 py-2 w-full'>
                                        <li className='py-1 px-6 hover:bg-gray-200'>Popular People</li>                                     
                                    </ul>                                    
                                </div> 
                            </li>
                        </ul>
                    </div>

                    <a onClick={()=> setMenu(!menu)}>
                        <GiHamburgerMenu className='w-5 h-5 text-white cursor-pointer lg:hidden'/>
                    </a>

                        <div className='lg:hidden'>
                            <Link href='/'>
                                <Image src={'/tmdb2.svg'} width={55} height={40} alt='mobile-logo'/>
                            </Link>
                        </div>
                        <a onClick={() => setisOpen(!isOpen)} className='cursor-pointer peer'>
                            {isOpen ? <MdOutlineClose className='h-5 w-5 text-white'/> : <FaSearch className='h-5 w-5 text-lightblue'/> }
                        </a>
                        
                        <section className={`absolute w-full left-0 top-16 ${isOpen ? 'block': 'hidden'}`}>
                            <div className='w-full h-11 bg-white px-10 flex items-center'>
                                    <span className='flex w-full items-center'>
                                        <FaSearch className='mr-5 w-5 h-5'/>
                                        <input placeholder='Search For Movies, TvShows or People' className='w-full border-none outline-none h-11 text-[#acacac] italic text-base'/>
                                    </span>
                            </div>
                        </section>
                </div>
            
            </div>
        </header>

            <div className={`top-16 bg-darkblue w-[90%] h-screen fixed  opacity-96 p-5 z-20 inline-block ${menu ? '' : 'left-[-90%]'}`}>
                <ul>
                    <li className='pb-3 font-semibold text-xl text-white'>
                        Movie
                    </li>
                    <li className='pb-3 font-semibold text-xl text-white'>
                        TvShows
                    </li>
                    <li className='pb-3 font-semibold text-xl text-white'>
                        People
                    </li>
                    <li className='pb-3 font-semibold text-xl text-white'>
                        More
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;