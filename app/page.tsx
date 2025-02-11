'use client';
import { Cpu, ArrowBigRightIcon } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import Background from '@/components/landing/Background';
import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';

export default function Home() {
  const [auth, setAuth] = useState(false);

  return (
    <div className="min-h-screen h-[2000px] bg-black text-white overflow-hidden">
      <Background />
      <Navbar />

      <Hero />



    </div>
  );
}