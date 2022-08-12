import React from "react";
import TryAgain from "../TryAgain/TryAgain";
import TypingChallengeContainer from "../TypingChallengeContainer/TypingChallengeContainer";
import './TestContainer.css'

const TestContainer = ({
    selectedParagraph,
    timerStarted,
    timeRemaining,
    words,
    characters,
    testInfo,
    wpm,
    startAgain,
    handleUserInput}) =>{ 
    return(
        <div className="test-container">
            {timeRemaining > 0 ? (
            <div data-aos='fade-up' className="typing-challenge-container">
                <TypingChallengeContainer 
                    timeRemaining={timeRemaining}
                    timerStarted={timerStarted}
                    selectedParagraph={selectedParagraph}
                    words={words} 
                    characters={characters} 
                    wpm={wpm}
                    testInfo={testInfo}
                    handleUserInput={handleUserInput}/>
            </div>):(
            <div className="try-again">
                <TryAgain words={words} characters={characters} wpm={wpm} startAgain={startAgain}/>
            </div>)}
        </div>
    );
}

export default TestContainer;