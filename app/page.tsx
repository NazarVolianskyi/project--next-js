'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const Home: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [greeting, setGreeting] = useState<string>('');
  const [showContactInfo, setShowContactInfo] = useState<boolean>(false);
  const [calcInput, setCalcInput] = useState<string>('');
  const [calcResult, setCalcResult] = useState<string | null>(null);

  const handleGreet = () => {
    if (name.trim() !== '') {
      setGreeting(`Hi, ${name}!`);
    } else {
      setGreeting('Please enter your name.');
    }
  };

  const handleCalculate = () => {
    try {
      const result = eval(calcInput);
      setCalcResult(result.toString());
    } catch (error) {
      setCalcResult('Invalid expression');
    }
  };

  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center space-x-4">
            <div>
              <Image src="/icons8-user-male.svg" alt="Logo" width={26} height={26} />
            </div>
            <h1 className="text-3xl font-bold text-gray-700">Hello, what&apos;s your name?</h1>
          </div>

          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm mb-2">
              Enter your name:
            </label>
            <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <button
              onClick={handleGreet}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-800 focus:outline-none focus:ring-1 focus:ring-blue-500 border border-4 border-gray-800"
          >
            Say Hi!
          </button>

          {greeting && <p className="mt-4 text-xl">{greeting}</p>}

          <button
              onClick={() => setShowContactInfo(true)}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-800 focus:outline-none focus:ring-1 focus:ring-blue-500 mt-4 border border-4 border-gray-800"
          >
            Show contact info
          </button>

          {showContactInfo && (
              <div className="mt-4 bg-white p-4 rounded-md border border-gray-300">
                <p>My number: 0350395359</p>
                <p>Email: 120748@student.san.edu.pl</p>
                <p>2 semestr, kierunek: Informatyka</p>
                <button
                    onClick={() => setShowContactInfo(false)}
                    className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-800 focus:outline-none focus:ring-1 focus:ring-blue-500 mt-4 border border-4 border-gray-800"
                >
                  Close
                </button>
              </div>
          )}

          <div className="mt-8 w-full max-w-xs">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Calculator</h2>
            <input
                type="text"
                value={calcInput}
                onChange={(e) => setCalcInput(e.target.value)}
                placeholder="Enter expression"
                className="px-4 py-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
            />
            <button
                onClick={handleCalculate}
                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-800 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full border border-4 border-gray-800"
            >
              Calculate
            </button>
            {calcResult !== null && <p className="mt-4 text-xl">{calcResult}</p>}
          </div>
        </div>
      </main>
  );
};

export default Home;