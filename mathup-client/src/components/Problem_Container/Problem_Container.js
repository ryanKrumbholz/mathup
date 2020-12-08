import React from 'react';
import Problem_Card from '../Problem_Card/Problem_Card';
import Answer_Container from '../Answer_Container/Answer_Container';
import { Random } from "random-js";

const Problem_Container = () => {

    const random = new Random();
    let problem;
    let answer;
    let answers = [];
    let answersMap = new Map();
    

    //TODO Create function to generate problem based on problem type
    const genProblem = type => {
        return problem;
    };

    //TODO Create function to potential answers to problem
    const genWrongAnswers = type => {
        // return WrongAnswers;
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

    const pushAnswers = () => {
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
    }

    // pushAnswers();

    return (
        <div>
            <Problem_Card problem = {problem}/>
            <Answer_Container answers = {answers}/>
        </div>
    );
}

export default Problem_Container;