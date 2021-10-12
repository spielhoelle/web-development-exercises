import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p>Hallo Earth, {props.username}</p>
            <p>Hallo Mars, {props.username}</p>
        </div>
    );
}

export default userOutput;