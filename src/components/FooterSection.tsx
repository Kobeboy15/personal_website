"use client"

import { useEffect, useState } from 'react';

export default function FooterSection() {
  const [currentQuote, setCurrentQuote] = useState('');

  useEffect(() => {
    // This for some reason gets rid of the 'missing dependency warning when using useEffect React Hook' warning //
    // Definitely not the prettiest, but just want to follow what the linter says 🤷‍♂️ //
    const quotes = [
      'Create with the heart, build with the mind.',
      'Think deeply, act creatively.',
      'Emotion fuels, intention directs.',
      'Passion sparks, wisdom refines.',
      'Inspiration ignites; discipline shapes.'
    ];

    setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)])
  }, [])

  return (
      <footer className="border-t border-zinc-700 py-4 relative text-black/70 dark:text-zinc-500 font-light">
        <div className="lg:px-24 px-8 max-w-screen-lg mx-auto flex md:flex-row md:gap-0 gap-2 flex-col items-center justify-between text-sm">
          <p className="text-xs">{currentQuote}</p>
          <p className="tracking-tight text-xs">© 2025 Kobe Michael</p>
        </div>
      </footer>
  );
}
