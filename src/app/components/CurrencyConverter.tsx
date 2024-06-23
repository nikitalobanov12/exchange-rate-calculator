// components/CurrencyConverter.tsx
"use client";
import { useState, useEffect } from 'react';

interface ExchangeRateData {
  rates: {
    [key: string]: number;
  };
}
const CurrencyConverter: React.FC = () => {
    const [amount, setAmount] = useState<number>(0);
    const [fromCurrency, setFromCurrency] = useState<string>('USD');
    const [toCurrency, setToCurrency] = useState<string>('EUR');
    const [conversionRate, setConversionRate] = useState<number>(0);
    const [convertedAmount, setConvertedAmount] = useState<number>(0);
    const currencies: string[] = [
      'USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY', 'SEK', 'NZD',
      'MXN', 'SGD', 'HKD', 'NOK', 'KRW', 'TRY', 'RUB', 'INR', 'BRL', 'ZAR',
      'DKK', 'PLN', 'THB', 'IDR', 'HUF', 'CZK', 'ILS', 'CLP', 'PHP', 'AED'
    ]; // Added more currencies
  
    useEffect(() => {
      if (fromCurrency && toCurrency) {
        fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
          .then(response => response.json())
          .then((data: ExchangeRateData) => {
            setConversionRate(data.rates[toCurrency]);
          })
          .catch(error => console.error('Error fetching the exchange rate:', error));
      }
    }, [fromCurrency, toCurrency]);
  
    useEffect(() => {
      setConvertedAmount(amount * conversionRate);
    }, [amount, conversionRate]);
  
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Currency Converter</h1>
        <div className="mb-4">
          <label className="block mb-2">
            <span className="text-gray-700">From:</span>
            <select
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              value={fromCurrency}
              onChange={e => setFromCurrency(e.target.value)}
            >
              {currencies.map(currency => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            <span className="text-gray-700">To:</span>
            <select
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              value={toCurrency}
              onChange={e => setToCurrency(e.target.value)}
            >
              {currencies.map(currency => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            <span className="text-gray-700">Amount:</span>
            <input
              type="number"
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              value={amount}
              onChange={e => setAmount(parseFloat(e.target.value))}
            />
          </label>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-semibold">
            Converted Amount: {convertedAmount.toFixed(2)} {toCurrency}
          </h2>
        </div>
      </div>
    );
  };

  export default CurrencyConverter