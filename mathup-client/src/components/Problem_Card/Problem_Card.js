import React from 'react';
import Card from 'react-bootstrap/Card';

const Problem_Card = props => {

    let problem = props.problem;

    return (
    <Card>
        <Card.Body>{problem}</Card.Body>
    </Card>
    );
}

export default Problem_Card;