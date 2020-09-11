import React, { Component } from "react";

export default class App extends Component {
  state = {
    profileImg: "https://thecvf.org/wp-content/uploads/2017/05/blank-user.png"
  };
  imageHandler = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImg: reader.result });
      }
    };
    const img = e.target.files[0];
    if (img.size < 10000000) {
      reader.readAsDataURL(img);
    } else {
      alert("Maksymalny rozmiar pliku to 10MB");
    }
  };
  validate = () => {
    function validateEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
    const email = document.querySelector("input[name=email]").value;
    if (validateEmail(email) === true) {
    } else {
      alert("Podany email jest nieprawidłowy!");
    }
  };
  render() {
    const { profileImg } = this.state;
    return (
      <>
        <header>Wypełnij formularz!</header>
        <section className="mainView">
          <form className="form">
            <label>Nazwa</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email" name="email"></input>
            <label>Telefon</label>
            <input type="number"></input>
            <label>Numer</label>
            <input type="number"></input>
            <label>
              <input type="checkbox"></input>Jeden
            </label>

            <label>
              <input type="checkbox"></input>Dwa
            </label>
            <input
              type="file"
              id="input"
              name="image-input"
              accept="image/png, image/jpeg"
              onChange={this.imageHandler}
            />

            <img src={profileImg} alt="img" className="preview-img" />
            <button type="submit">Wyślij</button>
          </form>
        </section>
      </>
    );
  }
}
