import React from "react";
import './ChallengeSection.css';
import TestContainer from "../TestContainer/TestContainer";

const ChallengeSection = ({
    selectedParagraph,
    timerStarted,
    timeRemaining,
    words,
    characters,
    testInfo,
    wpm,
    handleUserInput,
    startAgain}) =>{
    return(
        <div className="challenge-section-container">
            <h1 data-aos='fade-down' className="challenge-section-header">
                Take Speed Test Now!
            </h1>
            <TestContainer 
                selectedParagraph={selectedParagraph}
                words = {words}
                characters = {characters}
                wpm = {wpm}
                timeRemaining = {timeRemaining}
                timerStarted = {timerStarted}
                testInfo={testInfo}
                handleUserInput={handleUserInput}
                startAgain={startAgain}/>
        </div>
    );
}

export default ChallengeSection;