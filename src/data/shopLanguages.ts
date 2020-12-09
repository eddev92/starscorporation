// application
import { ILanguage } from '~/interfaces/language';

const dataShopLanguages: ILanguage[] = [
    {
        locale: 'en',
        code: 'en',
        name: 'English',
        icon: '/images/languages/language-1.png',
        direction: 'ltr',
    },
    {
        locale: 'es',
        code: 'ru',
        name: 'Español',
        icon: '/images/languages/language-2.png',
        direction: 'ltr',
    },
    // {
    //     locale: 'ar',
    //     code: 'ar',
    //     name: 'RTL',
    //     icon: '/images/languages/language-3.png',
    //     direction: 'rtl',
    // },
];

export const dataShopDefaultLocale = 'en';

export default dataShopLanguages;
