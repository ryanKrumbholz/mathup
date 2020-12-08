import React from 'react';
import Card from 'react-bootstrap/Card';

const Problem_Card = () => {

    let problem = "4 + 4 = ";

    return (
    <Card>
        <Card.Body>{problem}</Card.Body>
    </Card>
    );
}

export default Problem_Card;