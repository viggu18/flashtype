import React from "react";
import './TryAgain.css'

const TryAgain = ({words,characters,wpm}) =>{
    return(
        <div className="try-again-container">
            <h1>Test Results</h1>
            <div className="result-container">
                <p>
                    <b>Characters:</b> {characters}
                </p>
                <p>
                    <b>Words:</b> {words}
                </p>
                <p>
                    <b>Speed:</b> {wpm} wpm
                </p>
            </div>
            <div>
                <button className="end-btn start-again-btn">Re-try</button>
                <button className="end-btn share-btn" 
                    onClick={()=>window.open("https://www.facebook.com/sharer/sharer.php?u=viggu18",
                                'facebook-share-dialog','width=800,height=600')}>Share</button>
                <button className="end-btn tweet-btn" onClick={()=>window.open("https://twitter.com/intent/tweet?text=viggu18",
                                    'Twitter','width=800,height=600')}>Tweet</button>
            </div>
        </div>
    );
}

export default TryAgain;