import React from 'react';
import Answer_Card from '../Answer_Card/Answer_Card';


const Answer_Container = props => {
    let answers = props.answers;
    
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