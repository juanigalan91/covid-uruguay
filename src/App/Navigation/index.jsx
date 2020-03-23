import React from 'react';
import { AppContext } from '../../components/Context';
import { Link } from 'react-router-dom';
import routes from '../routes.json';
  

const CLASSNAME = 'navigation';
const Navigation = () => {
    const { lang } = React.useContext(AppContext);

    return (
        <nav className={CLASSNAME} role="navigation">
            <Link to={routes.colaborate}>Colaborar</Link>
        </nav>

    );
};

export { Navigation };