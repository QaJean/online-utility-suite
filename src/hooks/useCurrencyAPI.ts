import { useState, useEffect } from 'react';
import axios from 'axios';

export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface ExchangeRates {
  [key: string]: number;
}

const CURRENCIES: Currency[] = [
  { code: 'BRL', name: 'Real Brasileiro', symbol: 'R$' },
  { code: 'USD', name: 'Dólar Americano', symbol: '$' },
  { code: 'EUR', name: 'Euro', symbol: '€' },
  { code: 'GBP', name: 'Libra Esterlina', symbol: '£' },
  { code: 'JPY', name: 'Iene Japonês', symbol: '¥' },
  { code: 'CAD', name: 'Dólar Canadense', symbol: 'C$' },
  { code: 'AUD', name: 'Dólar Australiano', symbol: 'A$' },
  { code: 'CHF', name: 'Franco Suíço', symbol: 'CHF' },
  { code: 'CNY', name: 'Yuan Chinês', symbol: '¥' },
  { code: 'ARS', name: 'Peso Argentino', symbol: '$' }
];

const FALLBACK_RATES: ExchangeRates = {
  'BRL': 1,
  'USD': 0.19,
  'EUR': 0.18,
  'GBP': 0.15,
  'JPY': 28.5,
  'CAD': 0.26,
  'AUD': 0.29,
  'CHF': 0.17,
  'CNY': 1.35,
  'ARS': 165.2
};

export const useCurrencyAPI = () => {
  const [rates, setRates] = useState<ExchangeRates>(FALLBACK_RATES);
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchRates = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await axios.get('https://api.exchangerate-api.com/v4/latest/BRL', {
        timeout: 5000
      });
      
      if (response.data && response.data.rates) {
        setRates({ BRL: 1, ...response.data.rates });
        setLastUpdated(new Date());
      }
    } catch (err) {
      console.warn('Usando taxas de fallback devido a erro na API:', err);
      setError('Usando taxas aproximadas - API indisponível');
      setRates(FALLBACK_RATES);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRates();
  }, []);

  const convert = (amount: number, from: string, to: string): number => {
    if (!rates[to] || !rates[from]) return 0;
    
    // Convert to BRL first, then to target currency
    const brlAmount = amount / rates[from];
    return brlAmount * rates[to];
  };

  const getRate = (from: string, to: string): number => {
    if (!rates[to] || !rates[from]) return 0;
    return rates[to] / rates[from];
  };

  return {
    rates,
    currencies: CURRENCIES,
    loading,
    error,
    lastUpdated,
    convert,
    getRate,
    refresh: fetchRates
  };
};