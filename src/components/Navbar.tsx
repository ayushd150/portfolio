'use client';

import { useContext } from 'react';
import { Link, Separator, Tooltip } from '@radix-ui/themes';
import { GitHubLogoIcon, SunIcon, MoonIcon, FileIcon, RowsIcon, CodeIcon, HomeIcon } from '@radix-ui/react-icons';
import { FaXTwitter } from 'react-icons/fa6';
import { IoPerson } from "react-icons/io5";
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
        throw new Error('Navbar must be used within a ThemeProvider');
    }

    const { isDark, toggleTheme } = themeContext;
    const pathname = typeof window !== "undefined" ? window.location.pathname : "/";

    return (
        <nav className='w-full py-6 flex justify-center fixed top-0 z-50'>
            <div className="rounded-full w-[850px] max-lg:w-[800px] max-[400px]:w-[345px] max-[450px]:w-[400px] max-[350px]:w-[330px] max-[321px]:w-[310px] px-2 py-1 bg-white bg-opacity-10 backdrop-blur-lg border dark:border-white/20 flex items-center justify-center dark:shadow-none shadow">
                <div className='flex justify-center px-2 items-center max-sm:gap-4 gap-8 max-[400px]:gap-4 max-[450px]:gap-5 transition-all'>

                    <Link href="/" underline='none'>
                        <Tooltip content="Home">
                            <div className='hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300'>
                                <HomeIcon className={`w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white ${pathname === '/' ? 'dark:!text-[#FFC83D] !text-[#cc9e2b]' : ''}`} />
                            </div>
                        </Tooltip>
                    </Link>

                    <Link href="/projects" underline='none'>
                        <Tooltip content="Projects">
                            <div className='hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300'>
                                <CodeIcon className={`w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white ${pathname === '/projects' ? 'dark:!text-[#FFC83D] !text-[#cc9e2b]' : ''}`} />
                            </div>
                        </Tooltip>
                    </Link>

                    <Link href="/blogs" underline='none'>
                        <Tooltip content="Blog">
                            <div className='hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300'>
                                <RowsIcon
                                    className={`w-[16px] h-[16px] max-sm:w-[13px] max-sm:h-[13px] text-black dark:text-white ${pathname.startsWith('/blogs') ? 'dark:!text-[#FFC83D] !text-[#cc9e2b]' : ''}`}
                                />
                            </div>
                        </Tooltip>
                    </Link>

                    <Link href="/about" underline='none'>
                        <Tooltip content="About">
                            <div className='hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300'>
                                <IoPerson className={`w-[18px] h-[18px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white ${pathname === '/about' ? 'dark:!text-[#FFC83D] !text-[#cc9e2b]' : ''}`} />
                            </div>
                        </Tooltip>
                    </Link>

                    <Separator orientation='vertical' size={{ sm: '1', lg: '2', xl: '2' }} className='bg-black dark:bg-gray-400' />

                    <Link href="#" target='_blank' underline='none'>
                        <Tooltip content="Resume">
                            <div className='hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300'>
                                <FileIcon className='w-[19px] h-[19px] max-sm:h-[15px] max-sm:w-[15px] text-black dark:text-white' />
                            </div>
                        </Tooltip>
                    </Link>

                    <Link href="https://github.com/Fardeen26" target='_blank' underline='none'>
                        <Tooltip content="GitHub">
                            <div className='hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300'>
                                <GitHubLogoIcon className='w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white' />
                            </div>
                        </Tooltip>
                    </Link>

                    <Link href="https://x.com/intent/follow?screen_name=fardeentwt" target='_blank' underline='none'>
                        <Tooltip content="X (Twitter)">
                            <div className='hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300'>
                                <FaXTwitter className='w-[17px] h-[17px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white' />
                            </div>
                        </Tooltip>
                    </Link>

                    <Separator orientation='vertical' size={{ sm: '1', lg: '2', xl: '2' }} className='bg-black dark:bg-gray-400' />

                    <Tooltip content={isDark ? "Switch to light mode" : "Switch to dark mode"}>
                        <button 
                            className='hover:px-3 max-sm:hover:px-2 py-2.5 rounded-full transition-all duration-300 cursor-pointer flex items-center' 
                            onClick={toggleTheme}
                            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                        >
                            {isDark ? 
                                <MoonIcon className='w-[18px] h-[18px] max-sm:w-[14px] max-sm:h-[14px] text-white' /> : 
                                <SunIcon className='w-5 h-5 max-sm:w-[15px] max-sm:h-[15px] text-black' />
                            }
                        </button>
                    </Tooltip>

                </div>
            </div>
        </nav>
    );
}
export default Navbar;