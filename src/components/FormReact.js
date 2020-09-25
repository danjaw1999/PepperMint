import React, { useState, useEffect } from "react";
import useInput from "./hooks/useInput";

const FormReact = () => {
  const [tab, setTab] = useState([0, 8, 23, 32]);
  const [vat, setVat] = useInput("");
  const API = `https://my-json-server.typicode.com/danjaw1999/PepperMint/`;
  const [menu, setMenu] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const [form, setForm] = useState({
    number: "",
    name: "",
    quantity: "",
    netto: "",
    vatValue: "",
    brutto: ""
  });
  const { number, name, quantity, netto, vatValue } = form;
  const handleFormData = (e) => {
    const inputname = document.getElementById("name");

    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
    if (inputname.value == "") {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  };
  const disableInpProps = {};
  isDisabled
    ? (disableInpProps.disabled = true)
    : (disableInpProps.disabled = null);
  useEffect(() => {
    fetch(`${API}table`)
      .then((res) => res.json())
      .then((data) => setMenu(data))
      .catch((err) => console.log(err));
  }, []);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const sendTypes = {
      number,
      name,
      quantity,
      netto,
      vatValue
    };
    fetch(`${API}table`, {
      method: "POST",
      body: JSON.stringify(sendTypes),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    window.location.reload(true);
  };

  return (
    <>
      <h1>Formularz React z połączeniem API</h1>
      <form onSubmit={handleOnSubmit}>
        <tbody>
          <tr>
            <td className="tdView">#</td>
            <td className="tdView">Nazwa Produktu</td>
            <td className="tdView">Ilość</td>
            <td className="tdView">Cena netto</td>
            <td className="tdView">Podatek VAT w %</td>
            <td className="tdView">Cena Brutto</td>
          </tr>
          {menu?.map((e, index) => (
            <tr key={index}>
              <td className="tdView">
                <input
                  type="text"
                  placeholder={e.number}
                  name="number"
                  value={e.number}
                  onChange={handleFormData}
                  disabled
                />
              </td>
              <td className="tdView">
                <input
                  type="text"
                  placeholder="Name"
                  {...disableInpProps}
                  value={e.name}
                  name="name"
                  onChange={handleFormData}
                  disabled
                />
              </td>
              <td className="tdView">
                <input
                  type="number"
                  placeholder="Ilość"
                  name="quantity"
                  value={e.quantity}
                  onChange={handleFormData}
                  disabled
                />
              </td>
              <td className="tdView">
                <input
                  type="number"
                  placeholder="Netto"
                  onChange={handleFormData}
                  name="netto"
                  value={e.netto}
                  disabled
                />
              </td>
              <td className="tdView">
                <select
                  name="vat"
                  {...setVat}
                  onChange={handleFormData}
                  name="vatValue"
                  value={e.vatValue}
                  disabled
                >
                  {tab?.map((el, index) => (
                    <option key={index}>{el}</option>
                  ))}
                </select>
              </td>
              <td className="tdView">
                <input
                  type="number"
                  placeholder="Name"
                  disabled="disabled"
                  value={e.quantity * e.netto * (e.vatValue * 0.01 + 1)}
                  name="brutto"
                  onChange={handleFormData}
                />
              </td>
            </tr>
          ))}
          <tr>
            <td className="tdView">
              <input
                type="number"
                placeholder={number}
                name="number"
                {...disableInpProps}
                value={number}
                onChange={handleFormData}
              />
            </td>
            <td className="tdView">
              <input
                type="text"
                placeholder="Name"
                value={name}
                id="name"
                name="name"
                onChange={handleFormData}
              />
            </td>
            <td className="tdView">
              <input
                type="number"
                placeholder="Ilość"
                name="quantity"
                value={quantity}
                {...disableInpProps}
                onChange={handleFormData}
              />
            </td>
            <td className="tdView">
              <input
                type="number"
                placeholder="Netto"
                onChange={handleFormData}
                name="netto"
                {...disableInpProps}
                value={netto}
              />
            </td>
            <td className="tdView">
              <select
                name="vat"
                {...setVat}
                onChange={handleFormData}
                name="vatValue"
                {...disableInpProps}
                value={vatValue}
              >
                {tab?.map((el, index) => (
                  <option key={index}>{el}</option>
                ))}
              </select>
            </td>
            <td className="tdView">
              <input
                type="number"
                placeholder="Name"
                disabled="disabled"
                value={(quantity * netto * (vatValue * 0.01 + 1)).toFixed(2)}
                name="brutto"
                onChange={handleFormData}
              />
            </td>
          </tr>
          <button type="submit" className="btn">
            Wyślij
          </button>
        </tbody>
      </form>
    </>
  );
};

export default FormReact;
