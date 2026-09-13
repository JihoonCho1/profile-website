import React, { useState } from 'react';
import './coffee-game.css';
import coffeeImg from '../assets/coffee.png';
import coffeeBar from '../assets/caffeine-bar.png';
const MAX_CAFFEINE = 5;
const CoffeeGame = () => {
    const [caffeineLevel, setCaffeineLevel] = useState(0);

    const handleCoffeeClick = () => {
        if (caffeineLevel < MAX_CAFFEINE) {
            setCaffeineLevel(prev => prev + 1);
        }
    };

    const handleReset = () => {
        setCaffeineLevel(0);
    };

    const percentage = (caffeineLevel / MAX_CAFFEINE) * 100;

    return (
        <div className="game-container">
            <div className="bar-wrapper">
                

            </div>
        </div>
    );
};

export default CoffeeGame;