import React, { useState } from 'react';
import './EightBall.css';

const EightBall = ({ answers }) => {
    const [msg, setMsg] = useState('Think of a Question');
    const [color, setColor] = useState('black');
    
    const getRandom = () => {
        const idx = Math.floor(Math.random() * answers.length);
        setMsg(answers[idx].msg);
        setColor(answers[idx].color);
    };
    
    return (
        <div className="EightBall" 
        onClick={getRandom} 
        style={{ backgroundColor: color }}>
        <b>{msg}</b>
        </div>
    );
    };

export default EightBall;