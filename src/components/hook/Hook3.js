import React, { useState } from 'react';

const Hook3 = () => {
    const [text, setText] = useState("")
    return (
        <div>
            <input 
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key=="Enter"){
                        console.log(text);
                    }
                }}
            />
        </div>
    );
}

export default Hook3;
