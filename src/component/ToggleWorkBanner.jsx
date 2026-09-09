import './toggle-work-banner.css';
import { useState } from 'react';

import toggleOn from '../assets/toggleon.png';
import toggleOff from '../assets/toggleoff.png';


function WorkStyleBanner() {
    const [habits, setHabits] = useState({
        A: true,    // Daily Commit
        B: true,   // Clean Comments
        C: false,    // "Oh it works on mine?"
        D: false,   // Crash out
    });

    const toggleHabits = (key) => {
        setHabits((prev) => {
            if ((prev.D || prev.C) && (key === 'A' || key === 'B')) {
                return prev;
            }

            const isTurningOn = !prev[key]

            if (!isTurningOn) {
                return { ...prev, [key]: false };
            }

            if (key === 'A') return { ...prev, A: true};
            if (key === 'B') return { ...prev, B: true};
            if (key === 'C') return { ...prev, A: false, B: false, C: true, D: true};
            if (key === 'D') return { ...prev, A: false, B: false, D: true};

            return prev;
        });
    };

    return (
        <div className="toggle-banner-wrapper">
            {/* Daily Commit */}
            <div className="toggle-box">
                <p>- Daily Commit Streak</p>
                <button className="toggle-button" onClick={() => toggleHabits('A')}>
                <img 
                    src={habits.A ? toggleOn : toggleOff} 
                    alt={habits.A ? "ON" : "OFF"} 
                    className="toggle-img"
                />
                </button>
            </div>
            {/* Clean Comments */}
            <div className="toggle-box">
                <p>- Write Clean Comments</p>
                <button className="toggle-button" onClick={() => toggleHabits('B')}>
                <img 
                    src={habits.B ? toggleOn : toggleOff} 
                    alt={habits.B ? "ON" : "OFF"} 
                    className="toggle-img"
                />
                </button>
            </div>
            {/* It works on mine? */}
            <div className="toggle-box">
                <p>- Say "Oh, it works on mine?"</p>
                <button className="toggle-button" onClick={() => toggleHabits('C')}>
                <img 
                    src={habits.C ? toggleOn : toggleOff} 
                    alt={habits.C ? "ON" : "OFF"} 
                    className="toggle-img"
                />
                </button>
            </div>
            {/* Crash out */}
            <div className="toggle-box">
                <p>- Crash Out</p>
                <button className="toggle-button" onClick={() => toggleHabits('D')}>
                <img 
                    src={habits.D ? toggleOn : toggleOff} 
                    alt={habits.D ? "ON" : "OFF"} 
                    className="toggle-img"
                />
                </button>
            </div>
        </div>
    )
}

export default WorkStyleBanner;