'use client';
import Loading from "./Loading";
import Navbar from '@/components/layout/Navbar';

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <Loading />

            {/* Navbar */}
            <Navbar />
            {children}
        </main>
    );
}