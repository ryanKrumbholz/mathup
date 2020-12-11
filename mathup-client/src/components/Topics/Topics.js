import React from 'react';
import { useDispatch } from 'react-redux';
import { setTopic } from '../../actions/setTopic';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

const Topics = () => {
    const dispatch = useDispatch();

    const clickTopic = topic => {
        dispatch(setTopic(topic));
    }

    return (
        <div>
        <Accordion>
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
            Elementary Mathematics
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
            <Card.Body>
            <ul>
                {/* Addition */}
                <h3>
                    Addition
                </h3>
                <li>
                    <a href="/challenge" onClick={() => clickTopic('additionOnes')}>One's Addition</a>
                </li>
                <li>
                    <a href="/challenge" onClick={() => clickTopic('additionTens')}>Ten's Addition</a>
                </li>
                <li>
                    <a href="/challenge" onClick={() => clickTopic('addition')}>Mixed Addition</a>
                </li>

                {/* Subtraction */}
                <h3>
                    Subtraction
                </h3>
                <li>
                    <a href="/challenge" onClick={() => clickTopic('subtractionOnes')}>One's Subtraction</a>
                </li>
                <li>
                    <a href="/challenge" onClick={() => clickTopic('subtractionTens')}>Ten's Subtraction</a>
                </li>
                <li>
                    <a href="/challenge" onClick={() => clickTopic('subtraction')}>Mixed Subtraction</a>
                </li>

                {/* Multiplication */}
                <h3>
                    Multiplication
                </h3>
                <li>
                    <a href="/challenge" onClick={() => clickTopic('multiplyOnes')}>One's Multiplication</a>
                </li>
                <li>
                    <a href="/challenge" onClick={() => clickTopic('multiplyTens')}>Ten's Multiplication</a>
                </li>
                <li>
                    <a href="/challenge" onClick={() => clickTopic('multiply')}>Mixed Multiplication</a>
                </li>

                {/* Division */}
                <h3>
                    Division
                </h3>
                <li>
                    <a href="/challenge" onClick={() => clickTopic('divideOnes')}>One's Division</a>
                </li>
                <li>
                    <a href="/challenge" onClick={() => clickTopic('divideTens')}>Ten's Division</a>
                </li>
                <li>
                    <a href="/challenge" onClick={() => clickTopic('divide')}>Mixed Division</a>
                </li>
                
            </ul>
            </Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
            Algebra
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
            <Card.Body>
            <ul>
                <li>
                    <a href="/challenge" onClick={() => clickTopic('sysEq')}>System of Equations</a>
                </li>
            </ul>
            </Card.Body>
            </Accordion.Collapse>
        </Card>
        </Accordion>
        </div>
    );
}

export default Topics;