import React, { useState, useEffect } from "react";
import useInput from "./hooks/useInput";

const FormReact = () => {
  const [tab, setTab] = useState([0, 1.08, 1.23, 1.32]);
  const [vat, setVat] = useInput("");
  const API = `http://localhost:3005/`;
  const [menu, setMenu] = useState([]);
  const { isDisabled, setIsDisabled } = useState(true);
  const [form, setForm] = useState({
    number: 1,
    name: "",
    quantity: "",
    netto: "",
    vatValue: "",
    brutto: ""
  });
  const { number, name, quantity, netto, vatValue } = form;
  const handleFormData = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  const disableInpProps = {};
  if (isDisabled) {
    disableInpProps.disabled = true;
  } else {
    disableInpProps.disabled = null;
  }
  useEffect(() => {
    fetch(`${API}table`)
      .then((res) => res.json())
      .then((data) => setMenu(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Formularz React z połączeniem API</h1>
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
              <form>
                <input
                  type="text"
                  placeholder={e.number}
                  name="number"
                  value={e.number}
                  onChange={handleFormData}
                  disabled
                />
              </form>
            </td>
            <td className="tdView">
              <form>
                <input
                  type="text"
                  placeholder="Name"
                  {...disableInpProps}
                  value={e.name}
                  name="name"
                  onChange={handleFormData}
                  disabled
                />
              </form>
            </td>
            <td className="tdView">
              <form>
                <input
                  type="number"
                  placeholder="Ilość"
                  name="quantity"
                  value={e.quantity}
                  onChange={handleFormData}
                  disabled
                />
              </form>
            </td>
            <td className="tdView">
              <form>
                <input
                  type="number"
                  placeholder="Name"
                  onChange={handleFormData}
                  name="netto"
                  value={e.netto}
                  disabled
                />
              </form>
            </td>
            <td className="tdView">
              <form>
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
              </form>
            </td>
            <td className="tdView">
              <form>
                <input
                  type="number"
                  placeholder="Name"
                  disabled="disabled"
                  value={e.netto * e.vatValue}
                  name="brutto"
                  onChange={handleFormData}
                />
              </form>
            </td>
          </tr>
        ))}
        <tr>
          <td className="tdView">
            <form>
              <input
                type="number"
                placeholder={number}
                name="number"
                value={number}
                onChange={handleFormData}
              />
            </form>
          </td>
          <td className="tdView">
            <form>
              <input
                type="text"
                placeholder="Name"
                {...disableInpProps}
                value={name}
                name="name"
                onChange={handleFormData}
              />
            </form>
          </td>
          <td className="tdView">
            <form>
              <input
                type="number"
                placeholder="Ilość"
                name="quantity"
                value={quantity}
                onChange={handleFormData}
              />
            </form>
          </td>
          <td className="tdView">
            <form>
              <input
                type="number"
                placeholder="Name"
                onChange={handleFormData}
                name="netto"
                value={netto}
              />
            </form>
          </td>
          <td className="tdView">
            <form>
              <select
                name="vat"
                {...setVat}
                onChange={handleFormData}
                name="vatValue"
                value={vatValue}
              >
                {tab?.map((el, index) => (
                  <option key={index}>{el}</option>
                ))}
              </select>
            </form>
          </td>
          <td className="tdView">
            <form>
              <input
                type="number"
                placeholder="Name"
                disabled="disabled"
                value={(quantity * netto * vatValue).toFixed(2)}
                name="brutto"
                onChange={handleFormData}
              />
            </form>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default FormReact;
