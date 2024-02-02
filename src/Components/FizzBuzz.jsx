import React from 'react';
import NumberList from './NumberList';

const FizzBuzz = () => {
  return (
    <div className="container mx-auto mt-8 text-black">
      <h2 className="text-3xl font-bold mb-4">FizzBuzz Component</h2>
      <NumberList />
    </div>
  );
};

export default FizzBuzz;
