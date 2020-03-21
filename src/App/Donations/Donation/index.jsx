import React from 'react';
import { Card } from '../../../components/Card';
import { Title } from '../../../components/Title';
import { Button } from '../../../components/Button';
import { AppContext } from '../../../components/Context';
import { translate } from '../../../translations';

const CLASSNAME = 'donation';
const Donation = (props) => {
    const { lang } = React.useContext(AppContext);
    const { name, image, description, link } = props;

    return (
        <Card className={CLASSNAME}>
            <img className={`${CLASSNAME}__image`} src={image} alt={name} />
            <div className={`${CLASSNAME}__content`}>
                <Title className={`${CLASSNAME}__title`} importance={2} theme="dark">{name}</Title>
                <p className={`${CLASSNAME}__description`}>{description[lang]}</p>
                <Button className={`${CLASSNAME}__action`} asLink href={link} target="_blank">
                    {translate('DONATE', lang)}
                </Button>
            </div>
        </Card>
    );
};

export { Donation };