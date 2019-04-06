import React from 'react';

export default function MessageBox(props) {
    return (
        <div>
            {props.message}
            <button>Confirm</button>
        </div>
    );
}