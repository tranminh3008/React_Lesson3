import React, { useState } from 'react';

const Hook = () => {
    const [count, setCount]= useState(1);
    const handle_count_up = () => {
        setCount(count + 1); // Tương đương: count = count +1;
    };
    
    return (
        <div>
            <p>Count: {count}</p>
            <button onclick = {handle_count_up}>Count up</button>
        </div>
    );
}

export default Hook;
