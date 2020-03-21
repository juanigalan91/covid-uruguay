import React from 'react';
import { Card } from '../../../components/Card';
import { Title } from '../../../components/Title';
import { AppContext } from '../../../components/Context';

const CLASSNAME = 'donation';
const Donation = (props) => {
    const { lang } = React.useContext(AppContext);
    const { name, image, description } = props;

    return (
        <Card className={CLASSNAME}>
            <img className={`${CLASSNAME}__image`} src={image} alt={name} />
            <div className={`${CLASSNAME}__content`}>
                <Title className={`${CLASSNAME}__title`} importance={2} theme="dark">{name}</Title>
                <p className={`${CLASSNAME}__description`}>{description[lang]}</p>
            </div>
        </Card>
    );
};

export { Donation };