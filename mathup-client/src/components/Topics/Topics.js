import React from 'react';
import { useDispatch } from 'react-redux';
import { setTopic } from '../../actions/setTopic';

const Topics = () => {
    const dispatch = useDispatch();

    const clickTopic = topic => {
        dispatch(setTopic(topic));
    }

    return (
        <div>
            <h1 onClick={() => {clickTopic('multiply')}}>Multiply</h1>
            <h1 onClick={() => {clickTopic('addition')}}>add</h1>
            <h1 onClick={() => {clickTopic('subtraction')}}>subtract</h1>
        </div>
    );
}

export default Topics;