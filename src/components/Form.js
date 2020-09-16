import React, { Component } from "react";
import decoration from "./../assets/Decoration.svg";
import fb from "./../assets/Facebook.svg";
import ig from "./../assets/Instagram.svg";
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validPhoneRegex = RegExp(
  /^(([+]{0,1}\d{2})|\d?)[\s-]?[0-9]{2}[\s-]?[0-9]{3}[\s-]?[0-9]{4}$/gm
);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      phone: null,
      number: null,
      profileImg:
        "https://thecvf.org/wp-content/uploads/2017/05/blank-user.png",
      succes: false,
      errors: {
        name: "",
        email: "",
        phone: "",
        number: "",
        profileImg: ""
      }
    };
  }

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
  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "name":
        errors.name = value.length <= 0 ? "Podaj nazwę!" : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value)
          ? ""
          : "Email jest nieprawidłowy!";
        break;
      case "phone":
        errors.phone = validPhoneRegex.test(value)
          ? ""
          : "Numer telefonu jest nieprawidłowy!";
        break;
      case "number":
        errors.number =
          value.length < 4 || value.length > 6
            ? "Numer musi być mieć długość od 4 do 6 znaków!"
            : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value }, () => {
      // console.log(errors);
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm(this.state.errors)) {
      this.setState({ succes: true });
    } else {
      console.error("Invalid Form");
    }
    if (
      this.state.name == null ||
      this.state.email == null ||
      this.state.phone == null ||
      this.state.number == null
    ) {
      alert("Wypełnij formularz!");
      this.setState({ succes: false });
    }
  };

  render() {
    const { profileImg } = this.state;
    const { errors } = this.state;
    return (
      <div className="mainViewForm" name="form">
        <div className="upperView">
          <div className="form">
            <p>Wypełnij formularz!</p>
            <img src={decoration} alt="Black line decoration" />
            <div
              className="succes"
              style={{ display: this.state.succes === true ? "block" : "none" }}
            >
              {" "}
              Wiadomość została wysłana!
              <br />
              Wkrótce się skontaktujemy
            </div>
            <section className="mainView">
              <form className="form" onSubmit={this.handleSubmit} id="form">
                <div className="nameEmail">
                  <div className="inputForm">
                    <label>Nazwa</label>
                    <input
                      type="text"
                      name="name"
                      className="name"
                      onChange={this.handleChange}
                      noValidate
                      placeholder="Podaj nazwę!"
                    />
                    <p className="error">{errors.name}</p>
                  </div>
                  <div className="inputForm">
                    <label>Email</label>
                    <input
                      className="name"
                      type="email"
                      name="email"
                      onChange={this.handleChange}
                      noValidate
                      placeholder="Podaj email!"
                    />
                    <p className="error">{errors.email}</p>
                  </div>
                  <div className="inputForm">
                    <label>Telefon</label>
                    <input
                      className="name"
                      type="number"
                      name="phone"
                      onChange={this.handleChange}
                      noValidate
                      placeholder="Podaj telefon!"
                    />
                    <p className="error">{errors.phone}</p>
                  </div>
                  <div className="inputForm">
                    <label>Numer</label>
                    <input
                      className="name"
                      type="number"
                      name="number"
                      onChange={this.handleChange}
                      noValidate
                      placeholder="Podaj numer!"
                    />
                    <p className="error">{errors.number}</p>
                  </div>
                  <div className="check">
                    <input type="checkbox"></input>Jeden
                  </div>
                  <div className=" check">
                    <input type="checkbox"></input>Dwa
                  </div>
                  <div className="inputForm">
                    <input
                      type="file"
                      id="input"
                      name="image-input"
                      accept="image/png, image/jpeg"
                      onChange={this.imageHandler}
                    />
                  </div>
                  <img src={profileImg} alt="img" className="preview-img" />
                  <div className="button">
                    <button type="submit" className="buttonForm">
                      Wyślij
                    </button>
                  </div>
                </div>
              </form>
            </section>
          </div>
        </div>

        <footer>
          <div></div>
          <p>Copyright by Coders Lab</p>
          <div>
            <img src={fb} alt="Facebook Icon" />
            <img src={ig} alt="Instagram Icon" />
          </div>
        </footer>
      </div>
    );
  }
}
