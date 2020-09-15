import React, { Component } from "react";

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
        errors.name = value.length < 0 ? "Podaj nazwę!" : "";
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
      console.info("Valid Form");
    } else {
      console.error("Invalid Form");
    }
  };

  render() {
    const { profileImg } = this.state;
    const { errors } = this.state;

    return (
      <>
        <header>Wypełnij formularz!</header>
        <section className="mainView">
          <form className="form" onSubmit={this.handleSubmit} id="form">
            <label>Nazwa</label>
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              noValidate
            />
            {errors.name.length > 0 && (
              <span className="error">{errors.name}</span>
            )}
            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={this.handleChange}
              noValidate
            ></input>
            {errors.email.length > 0 && (
              <span className="error">{errors.email}</span>
            )}
            <label>Telefon</label>
            <input
              type="number"
              name="phone"
              onChange={this.handleChange}
              noValidate
            ></input>
            {errors.phone.length > 0 && (
              <span className="error">{errors.phone}</span>
            )}
            <label>Numer</label>
            <input
              type="number"
              name="number"
              onChange={this.handleChange}
              noValidate
            ></input>
            {errors.number.length > 0 && (
              <span className="error">{errors.number}</span>
            )}
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
            <button>Wyślij</button>
          </form>
        </section>
      </>
    );
  }
}
