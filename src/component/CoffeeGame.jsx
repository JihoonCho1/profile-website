import React, { useState } from 'react';
import './coffee-game.css';
import coffeeImg from '../assets/coffee.png';
import bar0 from '../assets/progress-bar/0.png';
import bar10 from '../assets/progress-bar/10.png';
import bar25 from '../assets/progress-bar/25.png';
import bar35 from '../assets/progress-bar/35.png';
import bar50 from '../assets/progress-bar/50.png';
import bar62 from '../assets/progress-bar/62.png';
import bar75 from '../assets/progress-bar/75.png';
import bar85 from '../assets/progress-bar/85.png';
import bar100 from '../assets/progress-bar/100.png';


const PROGRESS_BARS = [bar0, bar10, bar25, bar35, bar50, bar62, bar75, bar85, bar100];
const TOTAL_COFFEE = 8;
const PERCENT_LABELS = [0, 10, 25, 35, 50, 62, 75, 85, 100];

const CoffeeGame = () => {
    const [collectedList, setCollectedList] = useState(Array(TOTAL_COFFEE).fill(false));
    const count = collectedList.filter(Boolean).length;
    
    const handleCollect = (index) => {
        if (!collectedList[index]) {
            const nextList = [...collectedList];
            nextList[index] = true;
            setCollectedList(nextList);
        }
    };

    const handleReset = () => {
        setCollectedList(Array(TOTAL_COFFEE).fill(false));
    };

    const currentPercent = PERCENT_LABELS[count];

    return (
        <div className="coffee-game-wrapper">
            <div className="progress-container">
                <div className="progress-header">
                    <span className="caffeine-level">Caffeine: {currentPercent}%</span>
                </div>
                <img
                        src={PROGRESS_BARS[count]}
                        alt={`Progress &{count}`}
                        className="progress-bar-img"
                />
            </div>

            <p className='hint-text'>
                {count === TOTAL_COFFEE 
                ? "Fully Caffeinated! Ready to Code!" 
                : "Click the coffees to collect caffeine!"}
            </p>
            <div className="coffee-grid">
                    {collectedList.map((isCollected, index) => (
                        <div 
                            key={index} 
                            className={`coffee-slot ${isCollected ? 'hidden' : ''}`}
                            onClick={() => handleCollect(index)}
                        >
                        <img 
                            src={coffeeImg} 
                            alt="coffee" 
                            className="coffee-img"
                        />
                        </div>
                    ))}
            </div>
            {count === TOTAL_COFFEE && (
                        <button className="reset-btn" onClick={handleReset}>Reset</button>
                    )}
        </div>
    );
};

export default CoffeeGame;