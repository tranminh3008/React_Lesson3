import React, { useState } from 'react';

const Hook1 = () => {
    const [money,setMoney] = useState(10);
    const handle_X2 = () => {
        setMoney(money*2);
    }
    const handle_X3 = () => {
        setMoney(money*3);
    }
    return (
        <div>
            <p>Money: {money}</p>
            <button onclick = {handle_X2}>X2</button>
            <button onclick = {handle_X3}>X3</button>
        </div>
    );
}

export default Hook1;
