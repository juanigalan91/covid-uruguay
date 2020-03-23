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
        </section>

    );
};

export { ContactUs };