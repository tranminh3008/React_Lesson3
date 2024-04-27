import React, { useState } from 'react';

const Hook2 = () => {
    const [student, setStudent] = useState({name:"Lê Văn Mèo",age: 20})
    const change_name = () => {
        setStudent =({...student, name:"Lê Cam"})
    }
    const change_age = () => {
        setStudent =({...student, age: 22})
    }
    return (
        <div>
            <p>Tên: {student.name}</p>
            <p>Tuổi: {student.age}</p>
            <button onclick={change_name}>Change Name</button>
            <button onclick={change_age}>Change Age</button>
        </div>
    );
}

export default Hook2;
