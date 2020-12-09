import React from 'react';
import Problem_Card from '../Problem_Card/Problem_Card';
import Answer_Container from '../Answer_Container/Answer_Container';
import { Random } from "random-js";

const Problem_Container = () => {

    const random = new Random();
    let problem;
    let answer;
    let answers = [];
    
    //TODO Create function to generate problem based on problem type
    const genProblem = type => {
        let p;
        let n;
        let k;
        let ans;
        let ansArr;
        switch (type) {
            default:
                console.log('Error with problem type.');
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
        ansArr = pushAnswersAndShuffle(type, ans);
        return [p, ans, ansArr];
    };

    //Todo Create function to generate answer for problem
    const genAnswer = (type, problem) => {

    }

    //TODO Create function to get problem from db if problem cannot be auto generated;
    const getProblem = type => {

    }

    //TODO Create function to get answer from db if answer cannot be
    const getAnswer = type => {

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

    const pushAnswersAndShuffle = (type, ans) => {
        let answersMap = new Map();
        let ansArr = [];
        let floor;
        let ceil;

        ansArr.push(ans);
        answersMap.set(ans, ans);

        switch (type){
            default:
                console.log('Problem type error.');
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
                for (let i = 0; i < 3; i++) {
                    let val = random.integer(floor,ceil);
                    if (val !== ans && !answersMap.has(val)) {
                        ansArr.push(val);
                        answersMap.set(val, val);
                    }
                    else {
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

    let problemData = genProblem('additionOnes');
    problem = problemData[0];
    answers = problemData[2];
    

    // pushAnswers();

    return (
        <div>
            <Problem_Card problem = {problem}/>
            <Answer_Container answers = {answers}/>
        </div>
    );
}

export default Problem_Container;