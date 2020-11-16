import React from 'react';

const InputWrapper = (props) => {
    return (
        <div
            className={
                "input-group mb-3 col-md-" + props.col + " " + props.addClass
            }
        >
            <div className="input-group-prepend">
                <span className="input-group-text">{props.label} </span>
            </div>
            {props.children}
        </div>
    );
};

export default InputWrapper;