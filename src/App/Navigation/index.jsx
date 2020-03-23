import React from 'react';
import { AppContext } from '../../components/Context';
import { Link } from 'react-router-dom';
import routes from '../routes.json';
import { translate } from '../../translations';
  
const CLASSNAME = 'navigation';
const Navigation = () => {
    const { lang } = React.useContext(AppContext);

    return (
        <nav className={CLASSNAME} role="navigation">
            <Link className={`${CLASSNAME}__link`} to={routes.home}>{translate('DONATIONS', lang)}</Link>
            <Link className={`${CLASSNAME}__link`} to={routes.colaborate}>{translate('COLABORATE', lang)}</Link>
        </nav>

    );
};

export { Navigation };