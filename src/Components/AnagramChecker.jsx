import React, { useState } from 'react';

const AnagramChecker = () => {
  const [word1, setWord1] = useState('');
  const [word2, setWord2] = useState('');
  const [areAnagrams, setAreAnagrams] = useState(null);

  const checkAnagrams = () => {
    const sortedWord1 = word1.split('').sort().join('');
    const sortedWord2 = word2.split('').sort().join('');

    setAreAnagrams(sortedWord1 === sortedWord2);
  };

  return (
    <div className="container mx-auto mt-8 text-black">
      <h2 className="text-3xl font-bold mb-4">Anagram Checker</h2>

      <div className="flex space-x-4">
        <input
          type="text"
          placeholder="1 mot"
          value={word1}
          onChange={(e) => setWord1(e.target.value)}
          className="border p-2"
        />

        <input
          type="text"
          placeholder="2 mot"
          value={word2}
          onChange={(e) => setWord2(e.target.value)}
          className="border p-2"
        />

        <button
          onClick={checkAnagrams}
          className="bg-blue-500 text-black p-2 rounded"
        >
          Check Anagrams
        </button>
      </div>

      {areAnagrams !== null && (
        <p className="mt-4">
          {areAnagrams ? 'Ils sont des anagrammes!' : 'Ils le sont pas.'}
        </p>
      )}
    </div>
  );
};

export default AnagramChecker;
