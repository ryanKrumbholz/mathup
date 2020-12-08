import React from 'react';
import Problem_Card from '../Problem_Card/Problem_Card';
import Answer_Container from '../Answer_Container/Answer_Container';

const Problem_Container = () => {
    return (
        <div>
            <Problem_Card />
            <Answer_Container />
        </div>
    );
}

export default Problem_Container;