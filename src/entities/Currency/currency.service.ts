
import HttpService from "@/entities/http.service";

export default class CurrencyService {

    index(): Promise<any> {
        return fetch(HttpService.getBaseUrl() + '/currency',
            {
                method: 'GET'
            })
    }

    available(): Promise<any> {
        return new Promise((resolve, reject) => {
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
