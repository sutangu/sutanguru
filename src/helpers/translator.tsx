import ru from '../i18n/ru';
import en from '../i18n/en';

const translator = (word: string) => {
    const lang: string | null = localStorage.getItem('lang');

    switch (lang) {
        case 'en':
            return en[word];
        case 'ru':
            return ru[word];
        default:
            return ru[word];
    }
};

export default translator;
