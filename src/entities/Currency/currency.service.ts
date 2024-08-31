
import HttpService from "@/entities/http.service";
import type CurrencyModel from "@/entities/Currency/currency.model";

export default class CurrencyService {

    index(): Promise<Response> {
        return fetch(HttpService.getBaseUrl() + '/currency',
            {
                method: 'GET'
            })
    }

    available(): Promise<CurrencyModel[]> {
        return new Promise((resolve) => {
                resolve([
                    {
                        alias: 'rub',
                        label: 'Рубль'
                    },
                    {
                        alias: 'eur',
                        label: 'Евро'
                    },
                    {
                        alias: 'usd',
                        label: 'Доллар'
                    },
                ])
        })
    }
}
