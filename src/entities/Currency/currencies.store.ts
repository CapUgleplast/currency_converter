import type CurrencyModel from "@/entities/Currency/currency.model";

export default interface CurrenciesStore {
    currencies: Object,
    globalCurrency: CurrencyModel,
    availableCurrencies: CurrencyModel[]
}
