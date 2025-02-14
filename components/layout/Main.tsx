'use client';
import Loading from "./Loading";
import Navbar from '@/components/layout/Navbar';
import Footer from "./Footer";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <Loading />

            <Navbar />
            {children}
            <Footer />
        </main>
    );
}