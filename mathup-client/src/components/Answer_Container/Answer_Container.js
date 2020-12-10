import React from 'react';
import Answer_Card from '../Answer_Card/Answer_Card';


const Answer_Container = props => {
    let answers = props.answers;
    let corrAns = props.corrAns;
    let nxProblem = props.nxProblem;

    const checkAnswer = (ans) => {
        if (ans == corrAns) {
            setTimeout(() => nxProblem(), 2000);
            let cards = document.getElementsByClassName("answerCards");
            let len =  cards.length;

            //looping through all of the answer cards to reset bg to white after correct answer has been chosen
            for (let i = 0; i < len; i++) {
                cards[i].style.backgroundColor="white";
                cards[i].onClick=""; //temporarily disables onclick function from firing after correct answer is chosen.
            }
            return true;
        }
        else {
            return false;
        }

        
    }  
    
    return (
        <div>
            <Answer_Card answer = {answers[0]} checkAnswer = {checkAnswer} id="ans1"/>
            <Answer_Card answer = {answers[1]} checkAnswer = {checkAnswer} id="ans2"/>
            <Answer_Card answer = {answers[2]} checkAnswer = {checkAnswer} id="ans3"/>
            <Answer_Card answer = {answers[3]} checkAnswer = {checkAnswer} id="ans4"/>
        </div>
    );
}

export default Answer_Container;