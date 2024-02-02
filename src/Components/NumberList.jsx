
import React from 'react';

const NumberList = () => {
  const numbers = [];
  for (let i = 1; i <= 40; i++) {
    let output = '';

    if (i % 3 === 0) {
      output += 'Fizz';
    }

    if (i % 5 === 0) {
      output += 'Buzz';
    }

    numbers.push(
      <li key={i} className="py-2">
        {output || i}
      </li>
    );
  }

  return (
    <ul className="list-disc">{numbers}</ul>
  );
};

export default NumberList;
