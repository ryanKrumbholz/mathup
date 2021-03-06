import React from 'react';
import Spinner from 'react-bootstrap/Spinner'
import './spinner.sass'

const Loading = () => {
    return(
        <Spinner animation="border" role="status" class="spinner">
            <span className="sr-only">Loading...</span>
        </Spinner>
    );

}

export default Loading;