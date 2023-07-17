import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./App.module.css";
import Rates from "./components/rates/Rates";
import data from "./data/data.json";


function App() {
  const [rates, setRates] = useState([]);

  const fetchRates = async () => {
    const response = await axios.get(
      "http://data.fixer.io/api/latest?access_key=bdf7ef5c541c4600e4bbab3575c91a27&format=1"
    );
    setRates(response.data.rates);

  };

  useEffect(() => {
    fetchRates();
    // setRates(data)
  }, []);

  return (
    <div className={styles.wrapper}>
      <Rates rates={rates} />
  
    </div>
  );
}

export default App;
