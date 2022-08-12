import React from "react";
import './TestLetter.css'

const TestLetter = ({letterInfo}) =>{
    const { status } = letterInfo;

    const statusClassName={
        correct: "test-letter-correct",
        incorrect: "test-letter-incorrect",
        notAttempted: "test-letter-not-attempted",
    }[status]

    return(
        <span className={`test-letter ${statusClassName}`}>{letterInfo.testLetter}</span>
    );
}

export default TestLetter;