'use client';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FaCode, FaSun, FaMoon } from "react-icons/fa";
import Link from "next/link";
import { User } from 'lucide-react';


export default function NavbaR() {
    const [isAuth, setIsAuth] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
        if (typeof document !== 'undefined') {
            const token = document.cookie.split(';').find(c => c.trim().startsWith('token='));
            if (token) {
                setIsAuth(true);
            }
        }
    }, []);
    if (!mounted) return

    return (
        <nav className="flex justify-between items-center p-3 h-16 z-30">
            <Link href="/">
                <div className="flex items-center space-x-4">
                    <FaCode size={40} />
                    <span className="text-2xl font-bold">
                        IAU Coders
                    </span>
                </div>
            </Link>

            <div className="flex h-full items-center space-x-4">
                <div onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="cursor-pointer">
                    {theme === 'dark' ? (
                        <FaSun size={24} />
                    ) : (
                        <FaMoon size={24} />
                    )}
                </div>
                <Link href={isAuth ? '/auth' : '/auth'}>
                    <div className="h-full bg-color flex items-center justify-center space-x-2 rounded-md cursor-pointer p-1 px-2 hover:bg-hover">
                        <User className='text-background' size={32} />
                        <span className="text-background font-semibold">
                            {isAuth ? 'Sign Out' : 'Sign In'}
                        </span>
                    </div>
                </Link>


            </div>
        </nav>
    );
}