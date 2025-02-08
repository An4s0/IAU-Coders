'use client';
import Image from "next/image";
import Link from "next/link";

export default function Navbar({ setAuth }: Readonly<{ setAuth: (auth: boolean) => void }>) {
    return (
        <nav className="p-3 mt-3 shadow-xl fixed top-0 left-1/2 transform -translate-x-1/2 max-w-7xl w-[95%] bg-black/50 backdrop-blur-xl rounded-2xl z-50 border border-primary/20">
            <div className="flex items-center justify-between">
                <Link href="/">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8">
                            <Image src="/logo.png" alt="IAU Coder" width={32} height={32} />
                        </div>
                        <span className="text-xl font-bold">
                            IAU Coders
                        </span>
                    </div>
                </Link>

                <div onClick={() => setAuth(true)} className="items-center flex pl-4 pr-4 gap-4 pt-2 pb-2 bg-primary/20 rounded-lg border border-primary/20 cursor-pointer hover:bg-primary/50">
                    Sign In
                </div>
            </div>
        </nav>
    );
}