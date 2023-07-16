import React, { useState } from "react";

const RateItem = ({ rates, selectName }) => {
  const [value, setValue] = useState(0);
  const [selectValue, setSelectValue] = useState(rates[0][1]);
  return (
    <div>
      <input value={selectValue} type="text" title="input value" />
      <select name={selectName} value={selectValue} onChange={(evt) => {setSelectValue(evt.target.value)}}>
        {rates.map((rate, index) => {
          let name = rate[0];
          let value = rate[1];
          return (
            <option key={index} value={value}>
              {name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default RateItem;
