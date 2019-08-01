import ru from '../i18n/ru';
import en from '../i18n/en';

const splitter = (word: string, lang: object) => {
    return word.split('.').reduce((obj, part) => (obj && obj[part]) || null, lang);
};

const translator = (word: string) => {
    const lang: string | null = localStorage.getItem('lang');

    switch (lang) {
        case 'en':
            return splitter(word, en);
        case 'ru':
            return splitter(word, ru);
        default:
            return splitter(word, ru);
    }
};

export default translator;
