import React from 'react';
import classnames from 'classnames';

const CLASSNAME = 'snackbar';
const Snackbar = (props) => {
    const { text, success, className, hideAfter = 2000 } = props;
    const [show, setShow] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setShow(false);
        }, hideAfter);
    }, [show, hideAfter]);

    const snackbarClassname = classnames(className, CLASSNAME, {
        [`${CLASSNAME}__success`]: success,
        [`${CLASSNAME}__error`]: !success,
    });

    return (
        show && <div className={snackbarClassname}>
            {text}
        </div>

    );
};

export { Snackbar };