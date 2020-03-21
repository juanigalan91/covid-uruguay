import React from 'react';
import classnames from 'classnames';

const CLASSNAME = 'button';
const Button = (props) => {
    const { children, className, ...buttonProps } = props;

    const buttonClassname = classnames(className, CLASSNAME);

    return (
        <button className={buttonClassname} {...buttonProps}>
            {children}
        </button>

    );
};

export { Button };
