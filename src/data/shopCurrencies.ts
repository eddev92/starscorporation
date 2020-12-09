// application
import { ICurrency } from '~/interfaces/currency';

const dataShopCurrencies: ICurrency[] = [
    {
        code: 'PEN',
        symbol: 'S/.',
        name: 'Soles',
        rate: 3.59,
    },
    // {
    //     code: 'GBP',
    //     symbol: '£',
    //     name: 'Pound Sterling',
    //     rate: 0.78,
    // },
    {
        code: 'USD',
        symbol: '$',
        name: 'US Dollar',
        rate: 1,
    },
    // {
    //     code: 'RUB',
    //     symbol: '₽',
    //     name: 'Russian Ruble',
    //     rate: 64,
    // },
];

const dataShopDefaultCurrencyCode = 'USD';

export const dataShopDefaultCurrency: ICurrency = dataShopCurrencies.find((x) => (
    x.code === dataShopDefaultCurrencyCode
))!;

export default dataShopCurrencies;
