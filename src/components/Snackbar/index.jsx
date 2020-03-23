import React from 'react';
import classnames from 'classnames';

const CLASSNAME = 'snackbar';
const Snackbar = (props) => {
    const { text, success, className, onHide, hideAfter = 3000 } = props;
    const [show, setShow] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setShow(false);
            onHide();
        }, hideAfter);
    }, [show, hideAfter, onHide]);

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