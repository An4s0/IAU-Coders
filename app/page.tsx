'use client';
import { useEffect, useState } from 'react';
import MainLayout from '@/components/layout/Main';
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function Home() {
  const colors = ['bg-primary', 'bg-secondary', 'bg-tertiary'];
  const [randomStyles, setRandomStyles] = useState<{ color: string; marginLeft: number; width1: number; width2: number }[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setRandomStyles(
        Array.from({ length: ((window.innerHeight - 200) / 17) }, () => ({
          color: colors[Math.floor(Math.random() * colors.length)],
          marginLeft: Math.floor(Math.random() * 300),
          width1: Math.floor(Math.random() * 250) + 30,
          width2: Math.floor(Math.random() * 250) + 30
        }))
      );
    }
  }, []);

  return (
    <MainLayout>
      <div className="w-full transition-all duration-500 relative overflow-hidden px-2 sm:px-8">

        {/* Hero */}
        <section className="relative flex justify-between items-center rounded-3xl mt-5 px-5 h-[calc(100vh-150px)] lg:px-20 mb-20">
          <div className="inline items-center space-x-4 z-20">
            <h1 className="text-4xl font-bold md:text-5xl">
              Daily Programming <br /> Challenge
            </h1>
            <br />
            <span className="text-xl font-semibold md:text-2xl">
              {new Date().toISOString().split("T")[0]}
            </span>
            <Link href='/challenge'>
              <div className="h-10 md:h-12 w-56 md:w-60 mt-10 bg-color flex items-center justify-center space-x-2 rounded-md cursor-pointer p-1 px-2 hover:bg-background/25">
                <span className="text-background font-semibold">
                  View Today Challenge
                </span>
                <FaArrowRight className="text-background" size={24} />
              </div>
            </Link>
          </div>

          <div className="absolute inset-y-0 right-0 w-full md:w-auto flex flex-col space-y-2">
            {randomStyles.map((style, index) => (
              <div
                key={index}
                className="absolute flex"
                style={{ top: `${index * 20}px`, right: `${style.marginLeft}px` }}
              >
                <div
                  className={`h-2 rounded-3xl ${style.color}`}
                  style={{ width: `${style.width1}px`, marginRight: '10px' }}
                />
                <div
                  className={`h-2 rounded-3xl ${style.color}`}
                  style={{ width: `${style.width2}px` }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Problems */}
        <section className="flex flex-col items-center mb-20 ">
          <h1 className="text-3xl font-bold">
            Problems
          </h1>
          <div className="flex flex-wrap gap-5 mt-5 w-full justify-center ">
            <div className="w-full sm:w-96 h-52 border-1 rounded-lg p-5 border-tertiary">
              <h1 className="text-2xl font-semibold">
                Sum of Digits
              </h1>
              <span>
                Given an array of integers, return the sum of all the digits.
              </span>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="rounded-full text-sm opacity-60">
                  #Typescript
                </span>
                <span className="rounded-full text-sm opacity-60">
                  #Java
                </span>
                <span className="rounded-full text-sm opacity-60">
                  #Python
                </span>
              </div>
              <Link href='/challenge'>
                <div className="h-10 w-full mt-5 bg-color flex items-center justify-center space-x-2 rounded-md cursor-pointer">
                  <span className="text-background font-semibold">
                    Solve
                  </span>
                  <FaArrowRight className="text-background" size={24} />
                </div>
              </Link>
            </div>

            <div className="w-full sm:w-96 h-52 border-1 rounded-lg p-5 border-tertiary">
              <h1 className="text-2xl font-semibold">
                Sort Array
              </h1>
              <span>
                Given an array of integers, sort the array in ascending order.
              </span>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="rounded-full text-sm opacity-60">
                  #Javascript
                </span>
                <span className="rounded-full text-sm opacity-60">
                  #C++
                </span>
                <span className="rounded-full text-sm opacity-60">
                  #Go
                </span>
              </div>
              <Link href='/challenge'>
                <div className="h-10 w-full mt-5 bg-color flex items-center justify-center space-x-2 rounded-md cursor-pointer">
                  <span className="text-background font-semibold">
                    Solve
                  </span>
                  <FaArrowRight className="text-background" size={24} />
                </div>
              </Link>
            </div>

            <div className="w-full sm:w-96 h-52 border-1 rounded-lg p-5 border-tertiary">
              <h1 className="text-2xl font-semibold">
                Reverse String
              </h1>
              <span>
                Given a string, return the reverse of the string.
              </span>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="rounded-full text-sm opacity-60">
                  #C
                </span>
                <span className="rounded-full text-sm opacity-60">
                  #Rust
                </span>
                <span className="rounded-full text-sm opacity-60">
                  #Ruby
                </span>
              </div>
              <Link href='/challenge'>
                <div className="h-10 w-full mt-5 bg-color flex items-center justify-center space-x-2 rounded-md cursor-pointer">
                  <span className="text-background font-semibold">
                    Solve
                  </span>
                  <FaArrowRight className="text-background" size={24} />
                </div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </MainLayout>
  );
}