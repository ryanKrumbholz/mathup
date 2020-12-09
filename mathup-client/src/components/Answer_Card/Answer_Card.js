import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

const Answer_Card = props => {
    const [color, setColor] = useState();
    let answer = props.answer;
    const submit = () => {
        changeCardBGC(props.checkAnswer(answer));
    }

    const changeCardBGC = (bool) => {
        if (bool) {
            setColor('green');
        }
        else {
            setColor('red');
        }
        setTimeout(() => setColor('white'), 2000);
    }
    return (
        <Card onClick={() => submit()} style = {{background: color}}>
            <Card.Body>{answer}</Card.Body>
        </Card>
    );
}

export default Answer_Card;