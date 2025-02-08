'use client';
import { Cpu, ArrowBigRightIcon } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import Background from '@/components/Background';
import Navbar from '@/components/Navbar';
import challenges from '@/components/challenges';
import AuthModal from '@/components/AuthModal';

export default function Home() {
  const [auth, setAuth] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Background />

      <Navbar setAuth={setAuth} />

      {/* Hero */}
      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 relative">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full" />
            <h1 className="relative">
              <span className="inline-block mb-4 text-primary text-5xl md:text-7xl font-bold">
                Heading Here
              </span>
              <br />
              <span className="text-3xl md:text-4xl font-semibold">
                Subheading Here
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400">
              Paragraph Here
            </p>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="pt-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <Cpu className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold text-white">
              Latest Challenges
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {challenges.map((challenge, idx) => (
              <div key={idx} className="rounded-xl border border-primary/20 hover:border-primary/50 bg-black/60 shadow group p-6 hover:bg-black/80 transition-all duration-300">
                <div>
                  {challenge.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 mt-4">
                  {challenge.name}
                </h3>
                <p className="text-gray-400 mb-4">
                  {challenge.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {challenge.languagesSupport.map((lang) => (
                    <span
                      key={lang}
                      className="px-3 py-1 rounded-full text-sm bg-zinc-300/10 text-zinc-300 border border-zinc-300/20"
                    >
                      #{lang}
                    </span>
                  ))}
                </div>

                <Link href="/">
                  <div className="items-center justify-center flex pl-4 pr-4 gap-4 pt-2 pb-2 bg-[#00ffc4]/20 rounded-lg border border-[#00ffc4]/20 cursor-pointer hover:bg-[#00ffc4]/50 transition-all duration-300">
                    View Challenge <ArrowBigRightIcon className="w-5 h-5" />
                  </div>
                </Link>

              </div>
            ))}

          </div>
        </div>
      </section>

      {auth && <AuthModal onClose={() => setAuth(false)} />}
    </div>
  );
}