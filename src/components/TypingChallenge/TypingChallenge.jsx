import React from "react";
import './TypingChallenge.css';
import TestLetter from "../TestLetter/TestLetter";

const TypingChallenge = ({timerStarted,timeRemaining,testInfo,handleUserInput}) =>{
    return(
        <div className="typing-challenge">
            <div className="timer-container">
                <p className="timer">00:
                {timeRemaining >= 10 ? timeRemaining : `0${timeRemaining}`}</p>
                <p className="timer-info">
                    {!timerStarted && 'Start typing to start the test.'}</p>
            </div>
            <div className="textarea-container">
                <div className="textarea-left">
                    <div className="textarea test-paragraph">
                        {/* {selectedParagraph} */}
                        {testInfo.map((letterInfo,index)=>{
                            return <TestLetter letterInfo={letterInfo} key={index}/>
                        })}
                    </div>
                </div>
                <div className="textarea-right">
                    <textarea className="textarea" placeholder="Start typing here" onChange={(e)=> handleUserInput(e.target.value)}>
                        
                    </textarea>
                </div>
            </div>
        </div>
    );
}

export default TypingChallenge;