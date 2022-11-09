import React from "react";

export default function Contact() {
  let name = "Emmanuel";
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    providedData: false,
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData, //to be refactored, throws error on "npm run build"
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // submitToApi(formData)
    // console.log("Thanks for contacting me.");
  }

  return (
    <div className="contact">
      <div className="contact--content">
        <div className="contact--heading">Contact Me</div>
        <br />
        <div className="contact--supporting--text">
          Hi there, contact me to ask me about anything you have in mind.
        </div>

        <div className="form-container">
          <form className="form" onSubmit={handleSubmit}>
            <div className="form--name--row">
              <div className="form--first--name">
                <label htmlFor="first_name">First name</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="form--input"
                  id="first_name"
                  onChange={handleChange}
                  name="firstName"
                  value={formData.firstName}
                />
              </div>

              <div className="form--last--name">
                <label htmlFor="last_name">Last name</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="form--input"
                  id="last_name"
                  onChange={handleChange}
                  name="lastName"
                  value={formData.lastName}
                />
              </div>
            </div>

            <div className="form--email">
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="email"
                placeholder="yourname@email.com"
                className="form--input"
                id="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
              />
            </div>

            <div className="form--message">
              <label htmlFor="message">Message</label>
              <br />
              <textarea
                value={formData.message}
                placeholder="Send me a message and I'll reply you as soon as possible"
                id="message"
                onChange={handleChange}
                name="message"
              />
            </div>

            <div className="form--marketing">
              <input
                id="okayToEmail"
                type="checkbox"
                name="providedData"
                onChange={handleChange}
                checked={formData.providedData}
              />
              <label htmlFor="okayToEmail">
                You agree to providing your data to {name} who may contact you.
              </label>
            </div>

            <button className="form--submit" id="btn__submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
