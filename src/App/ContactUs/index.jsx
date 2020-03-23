import React from 'react';
import { Card } from '../../components/Card';
import { Title } from '../../components/Title';
import { AppContext } from '../../components/Context';
import { translate } from '../../translations';
import { Form } from './Form';

const CLASSNAME = 'contact-us';
const ContactUs = () => {
    const { lang } = React.useContext(AppContext);

    return (
        <section className={CLASSNAME}>
            <Title centered theme="light">{translate('DO_YOU_WANT_TO_HELP_US', lang)}</Title>
            <Card className={`${CLASSNAME}__card`}>
                <p className={`${CLASSNAME}__description`}>{translate('WANT_TO_TAKE_PART_OF_THIS_PROJECT', lang)}</p>
                <Form />
            </Card>
            <Card className={`${CLASSNAME}__card`}>
                <Title importance={2} className={`${CLASSNAME}__description`} theme="light">{translate('ARE_YOU_A_DEVELOPER', lang)}</Title>
                <p className={`${CLASSNAME}__description`}>
                    {translate('YOU_CAN_CONTRIBUTE', lang)}
                </p>
                <a target="_blank" rel="noopener noreferrer" className={`${CLASSNAME}__link`} href="https://www.github.com/juanigalan91/covid-uruguay">{translate('GO_TO_REPO', lang)}</a>
            </Card>
        </section>

    );
};

export { ContactUs };