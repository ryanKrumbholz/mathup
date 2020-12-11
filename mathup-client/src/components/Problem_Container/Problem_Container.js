import React, { useState } from 'react';
import Problem_Card from '../Problem_Card/Problem_Card';
import Answer_Container from '../Answer_Container/Answer_Container';
import { Random } from "random-js";
import { useSelector } from 'react-redux';

const Problem_Container = () => {

    const [isCorrect, setCorrect] = useState(false);
    const topic = useSelector(state => state.topic);
    const random = new Random();
    let problem;
    let ans;
    let answers = [];

    
    
    //TODO Create function to generate problem based on problem topic
    const genProblem = topic => {
        let p;
        let n;
        let k;
        let ans;
        let ansArr;
        switch (topic) {
            default:
                console.log('Error with problem topic.');
                console.log(topic)
                break;
            case 'additionOnes':
                n = random.integer(0,9);
                k = random.integer(0,9);
                p  = `${n} + ${k} = ?`;
                ans = n + k;
                break;
            case 'additionTens':
                n = random.integer(0,99);
                k = random.integer(0,99);
                p  = `${n} + ${k} = ?`;
                ans = n + k;
                break;
            case 'addition': 
                n = random.integer(0,999);
                k = random.integer(0,999);
                p  = `${n} + ${k} = ?`;
                ans = n + k;
                break;
            case 'subtractionOnes':
                n = random.integer(0,9);
                k = random.integer(0,9);
                p  = `${n} - ${k} = ?`;
                ans = n - k;
                break;
            case 'subtractionTens':
                n = random.integer(0,99);
                k = random.integer(0,99);
                p  = `${n} - ${k} = ?`;
                ans = n - k;
                break;
            case 'subtraction':
                n = random.integer(0,999);
                k = random.integer(0,999);
                p  = `${n} - ${k} = ?`;
                ans = n - k;
                break;
            case 'multiplyOnes':
                n = random.integer(0,9);
                k = random.integer(0,9);
                p  = `${n} x ${k} = ?`;
                ans = n * k;
                break;
            case 'multiplyTens':
                n = random.integer(0,99);
                k = random.integer(0,99);
                p  = `${n} x ${k} = ?`;
                ans = n * k;
                break;
            case 'multiply':
                n = random.integer(0,999);
                k = random.integer(0,999);
                p  = `${n} x ${k} = ?`;
                ans = n * k;
                break;
            case 'divideOnes':
                n = random.integer(0,9);
                k = random.integer(0,9);
                p  = `${n} / ${k} = ?`;
                ans = n / k;
                break;
            case 'divideTens':
                    n = random.integer(0,99);
                    k = random.integer(0,99);
                    p  = `${n} / ${k} = ?`;
                    ans = n / k;
                    break;
            case 'divide':
                n = random.integer(0,999);
                k = random.integer(0,999);
                p  = `${n} / ${k} = ?`;
                ans = n / k;
                break;
            case 'sysEq':
                break;
        }
        ansArr = pushAnswersAndShuffle(topic, ans);
        return [p, ans, ansArr];
    };


    //TODO Create function to get problem from db if problem cannot be auto generated;
    const getProblem = topic => {

    }

    //TODO Create function to get answer from db if answer cannot be
    const getAnswer = topic => {

    }

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

    const pushAnswersAndShuffle = (topic, ans) => {
        let answersMap = new Map();
        let ansArr = [];
        let floor;
        let ceil;

        ansArr.push(ans);
        answersMap.set(ans, ans);

        switch (topic){
            default:
                console.log('Problem topic error.');
                break;
            case 'addition':
            case 'additionOnes':
            case 'additionTens':
            case 'subtraction':
            case 'subtractionOnes':
            case 'subtractionTens':
            case 'multiply':
            case 'multiplyOnes':
            case 'multiplyTens':
            case 'divide':
            case 'divideOnes':
            case 'divideTens':
                floor = ans - 10;
                ceil = ans + 10;
                // Looping the length of remaining cards to be filled after pushing correct answer to array.
                for (let i = 0; i < 3; i++) {
                    let val = random.integer(floor,ceil);
                    if (val !== ans && !answersMap.has(val)) {
                        ansArr.push(val);
                        answersMap.set(val, val);
                    }
                    else {
                        // While current value is already not in the array. Checks hashmap.
                        while (answersMap.has(val)) {
                            val = random.integer(floor,ceil);
                        }
                        ansArr.push(val);
                        answersMap.set(val, val);
                    }
                    
                }
                break;
        }

        return shuffle(ansArr);
    }


    // Generates new problem. Called when the correct answer is chosen.
    const nxProblem = () => {
        genProblem(topic);
        for (let i = 0; i < 2; i++) {setCorrect(!isCorrect)};
    }


    let problemData = genProblem(topic);
    problem = problemData[0];
    ans = problemData[1];
    answers = problemData[2];
    

    // pushAnswers();

    return (
        <div>
            <Problem_Card problem = {problem}/>
            <Answer_Container answers = {answers} corrAns = {ans} nxProblem = {nxProblem}/>
        </div>
    );
}

export default Problem_Container;