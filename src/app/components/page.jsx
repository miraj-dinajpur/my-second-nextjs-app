'use client';

import React, { useState } from "react";

const CounterPage = () => {
  console.log("Counter page rendered");
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2 className="text-5xl font-bold mb-4">counter = {count}</h2>
      <button onClick={() => setCount(count + 1)}
       className="text-2xl s border-2 p-2 bg-blue-700 cursor-pointer ">
        Increase
      </button>
    </div>
  );
};

export default CounterPage;
