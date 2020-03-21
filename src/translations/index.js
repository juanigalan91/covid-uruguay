import es_ES from './es_ES.json';

const DEFAULT_LANG = 'es_ES';
const translations = {
    es_ES,
};

const translate = (key, lang) => {
    const translationsInLanguage = translations[lang];

    return translationsInLanguage[key] || key;
};

export { translate, DEFAULT_LANG };