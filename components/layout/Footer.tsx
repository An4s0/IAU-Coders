'use client';
import { FaCode } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex flex-col md:flex-row justify-between items-center p-5 max-w-7xl mx-auto border-t-1 border-primary">
            <div className="flex items-center space-x-2 mb-5 md:mb-0">
                <FaCode size={60} />
                <span className="text-2xl font-bold">IAU Coders</span>
            </div>

            <div className="flex space-x-10">
                <div className="text-sm">
                    <span className="font-extrabold">Links</span>
                    <div className="flex flex-col space-y-1 mt-3">
                        <Link href="/about">
                            <p className="hover:text-hover">Home</p>
                        </Link>
                        <Link href="/problems">
                            <p className="hover:text-hover">Problems</p>
                        </Link>
                        <Link href="/auth">
                            <p className="hover:text-hover">Auth</p>
                        </Link>
                        <Link href="/profile">
                            <p className="hover:text-hover">Profile</p>
                        </Link>
                    </div>
                </div>
                <span className="text-sm">
                    <span className="font-extrabold">Social Media</span>
                    <div className="flex flex-col space-y-1 mt-3">
                        <Link href="https://twitter.com">
                            <p className="hover:text-hover">Twitter</p>
                        </Link>
                        <Link href="https://github.com">
                            <p className="hover:text-hover">Github</p>
                        </Link>
                    </div>
                </span>
            </div>
        </footer>
    );
}