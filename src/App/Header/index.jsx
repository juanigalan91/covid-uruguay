import React from 'react';
import { Card } from '../../components/Card';
import { AppContext } from '../../components/Context';
import { Title } from '../../components/Title';
import { translate } from '../../translations';

const CLASSNAME = 'header';
const Header = () => {
    const { lang } = React.useContext(AppContext);

    return (
        <header className={CLASSNAME}>
            <Card className={`${CLASSNAME}__logo`}>
                <img alt={translate('URUGUAY_SUN', lang)} src="icon.png" />
            </Card>
            <div className={`${CLASSNAME}__introduction`}>
                <Title>{translate('DONATIONS_COVID', lang)}</Title>
                <p className={`${CLASSNAME}__purpose`}>{translate('PURPOSE', lang)}</p>
            </div>
        </header>

    );
};

export { Header };