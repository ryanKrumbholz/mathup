import React from 'react';
import Card from 'react-bootstrap/Card';

const Answer_Card = props => {
    let answer = props.answer;
    const submit = () => {
        // console.log(4)
    }
    return (
        <Card onClick={() => submit()}>
            <Card.Body>{answer}</Card.Body>
        </Card>
    );
}

export default Answer_Card;