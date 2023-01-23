import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { Dropdown } from 'react-bootstrap'


const CURRENCY_LIST = [
  {
    symbol: "$",
    name: "Dollar"
  },
  {
    symbol: "£",
    name: "Pound"
  },
  {
    symbol: "€",
    name: "Euro"
  },
  {
    symbol: "₹",
    name: "Ruppee"
  }
]

const Currency = () => {
  const { dispatch } = useContext(AppContext);
  const [tempCurrency, setTempCurrency] = useState({ symbol: "£", name: "Pound" });

  const changeCurrency = currency => {
    setTempCurrency(currency);
    dispatch({ type: "CHG_CURRENCY", payload: currency.symbol });
  }

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Currency ({tempCurrency.symbol} {tempCurrency.name})
      </Dropdown.Toggle>

      <Dropdown.Menu className='currency-dropdown'>
        {CURRENCY_LIST.map(c => <Dropdown.Item className='currency-dropdown-item' key={c.symbol} onClick={() => changeCurrency(c)}>{c.symbol} {c.name}</Dropdown.Item>)}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Currency;