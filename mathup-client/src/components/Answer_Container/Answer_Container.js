import React from 'react';
import Answer_Card from '../Answer_Card/Answer_Card';
import { Random } from "random-js";

const Answer_Container = () => {
    //Will comment out a large majority of this. This was just to test shuffle and random.
    const random = new Random();
    let answers = [];
    let answersMap = new Map();
    let answer = 8;

    const shuffle = (array) => {
        var currentIndex = array.length
          , temporaryValue
          , randomIndex
          ;
    
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
    
          // Pick a remaining element...
          randomIndex = random.integer(0,currentIndex - 1);
          currentIndex -= 1;
    
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
    
        return array;
      };

    answers.push(answer);
    answersMap.set(answer, answer);

    for (let i = 0; i < 3; i++) {
        let val = random.integer(0,20);
        if (val !== answer) {
            answers.push(val);
            answersMap.set(val, val)
        }
        else {
            while (answersMap.has(val)) {
                val = random.integer(0,20);
            }
            answers.push(val);
            answersMap.set(val, val);
        }
        
    }

    answers = shuffle(answers);
    
    return (
        <div>
            <Answer_Card answer = {answers[0]}/>
            <Answer_Card answer = {answers[1]}/>
            <Answer_Card answer = {answers[2]}/>
            <Answer_Card answer = {answers[3]}/>
        </div>
    );
}

export default Answer_Container;