import React from 'react';
import { AppContext } from '../../components/Context';
import { translate } from '../../translations';

const CLASSNAME = 'footer';
const Footer = () => {
    const { lang } = React.useContext(AppContext);

    return (
        <footer className={CLASSNAME}>
            <div className={`${CLASSNAME}__logo`}>
                <img alt={translate('URUGUAY_SUN', lang)} src="icon.png" />
                <span className={`${CLASSNAME}__disclaimer`}>{translate('DISCLAIMER', lang)}</span>
            </div>
        </footer>

    );
};

export { Footer };