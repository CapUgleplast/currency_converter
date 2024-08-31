import {defineStore} from "pinia";
import CurrencyService from "@/entities/Currency/currency.service";
import type CurrenciesStore from "@/entities/Currency/currencies.store";

export const useCurrencyStore = defineStore('currencies', {
  state: (): CurrenciesStore => ({
      currencies: {},
      globalCurrency: {
          alias: '',
          label: ''
      },
      availableCurrencies: []
  }),
  getters: {
      getCurrencies: state => state.currencies,
      getFilteredCurrencies: state => {
          return Object.fromEntries(Object.entries(state.currencies).filter((item) => {
              return item[0].split('-')[1].includes(state.globalCurrency?.alias || '')
          }))
      },
      getCurrenciesNames: state => {
           return Array.from(new Set(Object.entries(state.currencies)
               .map((item) => {
                   return item[0].split('-')[0]
               })))
      },
      getGlobalCurrency: state => state.globalCurrency,
      getAvailableCurrencies: state => state.availableCurrencies
  },
  actions: {
      async fetchCurrencies() {
          await new CurrencyService()
              .index()
              .then(async response => {
                  this.currencies = await response.json();
              })
      },
      setGlobalCurrency(alias: string) {
          this.globalCurrency = this.getAvailableCurrencies.find(item => item.alias === alias) || this.globalCurrency
      },
      async fetchAvailableCurrencies() {
          await new CurrencyService()
              .available()
              .then((response) => {
                  this.availableCurrencies = response

                  if (!this.globalCurrency.alias && this.availableCurrencies.length) {
                      this.setGlobalCurrency(this.availableCurrencies[0]?.alias || '')
                  }
              })
      }

  }
});
