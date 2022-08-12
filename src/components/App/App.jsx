import React from "react";
import './App.css'
import Nav from "../Nav/Nav";
import Landing from '../Landing/Landing'
import Footer from "../Footer/Footer";
import ChallengeSection from "../ChallengeSection/ChallengeSection";

const TotalTime = 60;
const url = 'http://metaphorpsum.com/paragraphs/1/9';
const defaultState = {
        selectedParagraph: '',
        timerStarted: false,
        timeRemaining: TotalTime,
        words:0,
        characters: 0,
        wpm: 0,
        testInfo: []
    }

class App extends React.Component{
    state = defaultState


    fetchNewParagraph = () =>{
        fetch(url).then(response => response.text()).then(data => {
            const selectedArray = data.split('')
            const testInfo = selectedArray.map(selectedLetter => {
            return{
                testLetter: selectedLetter,
                status: 'notAttempted',
            }})
            this.setState({...defaultState,testInfo, selectedParagraph: data})
            })
    }


    componentDidMount(){
        this.fetchNewParagraph()
    }

    startTimer = () =>{
        this.setState({timerStarted:true})
        const timer = setInterval(()=>{
            if(this.state.timeRemaining >0 ){

                const timeSpent = TotalTime - this.state.timeRemaining;
                const wpm = timeSpent > 0 ? (this.state.words/timeSpent) * TotalTime : 0;

                this.setState({
                    timeRemaining: this.state.timeRemaining - 1,
                    wpm: parseInt(wpm) 
                })
            }else{
                clearInterval(timer);
            }
        },1000);
    };

    handleUserInput = (inputVal) => {
        if(!this.state.timerStarted) this.startTimer();

        const characters = inputVal.length;
        const words = inputVal.split(' ').length;
        const index = characters -1 

        if(index < 0){
            this.setState({
                testInfo: [
                    {
                        testLetter: this.state.testInfo[0].testLetter,
                        status: 'notAttempted'
                    },
                    ...this.state.testInfo.slice(1),
                ],
                characters,
                words
            })
            return;
        }

        if(index >= this.state.selectedParagraph.length){
            this.setState({
                characters,
                words
            });
            return;
        }
        const testInfo = this.state.testInfo;
        if(!(index == this.state.selectedParagraph.length - 1))
            testInfo[index + 1].status = 'notAttempted';

        const isCorrect = inputVal[index] == testInfo[index].testLetter;

        testInfo[index].status = isCorrect ? 'correct' : 'incorrect'

        this.setState({
                testInfo,
                words,
                characters})
    };

    startAgain = () => this.fetchNewParagraph()
    
    render(){
        return(
            <div className="app">
                <Nav />
                <Landing />
                <ChallengeSection 
                    selectedParagraph={this.state.selectedParagraph}
                    words = {this.state.words}
                    characters = {this.state.characters}
                    wpm = {this.state.wpm}
                    timeRemaining = {this.state.timeRemaining}
                    timerStarted = {this.state.timerStarted}
                    testInfo={this.state.testInfo}
                    handleUserInput={this.handleUserInput}
                    startAgain={this.startAgain}
                />
                <Footer />
            </div>
        )
    }
}

export default App;