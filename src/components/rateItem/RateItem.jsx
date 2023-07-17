import React, { useEffect, useState } from "react";
import data from "../../data/data.json";

const RateItem = ({ rates, name, defaultCurrency }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (rates) setValue(() => rates[defaultCurrency] || "");
  }, [rates]);

  const [currency, setCurrency] = useState(defaultCurrency);

  const currencyList = Object.keys(rates);

  const onValueChange = (e) => {
    setValue(e.target.value);
  };

  const onCurrencyChange = (e) => {
    setCurrency(e.target.value);
    setValue(rates[e.target.value]);
  };

  return (
    <div>
      <input type="number" value={value} onChange={onValueChange} />
      <select name={name} value={currency} onChange={onCurrencyChange}>
        {currencyList.map((currency, index) => {
          return <option key={index}>{currency}</option>;
        })}
      </select>
    </div>
  );
};

export default RateItem;
