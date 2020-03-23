import React from 'react';
import { Button } from '../../../components/Button';
import { Snackbar } from '../../../components/Snackbar';
import { Input } from '../../../components/Input';
import { AppContext } from '../../../components/Context';
import { translate } from '../../../translations';

const INPUTS = {
    description: 'description',
    link: 'link',
};

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
};

const CLASSNAME = 'contact-us';
const Form = () => {
    const { lang } = React.useContext(AppContext);
    const [description, setDescription] = React.useState('');
    const [link, setLink] = React.useState('');
    const [error, setError] = React.useState(null);
    const [success, setSuccess] = React.useState(false);
    const [wasApiExecuted, setWasApiExecuted] = React.useState(false);

    const inputValues = {
        [INPUTS.description]: description,      
        [INPUTS.link]: link,        
    };

    const onSubmit = (e) => {
        e.preventDefault();
    
        const keys = Object.keys(inputValues);
        let formIsValid = true;
        let i = 0;

        for (i = 0; i < keys.length && formIsValid; i++) {
            const key = keys[i];
            const value = inputValues[key];

            formIsValid = formIsValid && (value && value !== '');
        }

        if (!formIsValid) {
            setError(keys[i - 1]);
        } else {
            executeApiCall();
        }
    };

    const executeApiCall = () => {
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': 'contact-us',
                [INPUTS.description]: description,
                [INPUTS.link]: link,
            })
            })
            .then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    setWasApiExecuted(true);
                    setSuccess(true);
                } else {
                    setWasApiExecuted(true);
                    setSuccess(false);
                }
            });
    }

    return (
        <form onSubmit={onSubmit} className={`${CLASSNAME}__form`} name='contact-us'>
            <Input
                type='textarea'
                name={INPUTS.description}
                onChange={setDescription}
                label={translate('DESCRIPTION', lang)}
                errorLabel={translate('DESCRIPTION_ERROR', lang)}
                value={description}
                hasError={error === INPUTS.description}
            />
            <Input
                type='text'
                name={INPUTS.link}
                value={link}
                onChange={setLink}
                label={translate('LINK', lang)}
                errorLabel={translate('LINK_ERROR', lang)}
                hasError={error === INPUTS.link}
            />
            <Button type='submit'>
                {translate('SEND', lang)}
            </Button>
            <Snackbar
                text={success ? translate('THANKS', lang) : translate('ERROR', lang)}
                success={success}
                onHide={() => setWasApiExecuted(false)}
                display={wasApiExecuted}
            />
        </form>
    );
};

export { Form };
