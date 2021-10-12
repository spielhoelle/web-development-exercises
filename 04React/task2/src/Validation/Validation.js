import React from 'react';

const Validation = (props) => {
    return (
        <div>
            {props.textLength < 5 ? 'too short' : 'long enough'}
        </div>
    );
}

export default Validation;