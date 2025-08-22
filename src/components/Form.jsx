import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "") {
      alert("Please fill in the name field");
      return;
    } else if (email === "") {
      alert("Please fill in the email field");
      return;
    } else {
      console.log(name, email);
      alert("Form submitted");
      setName("");
      setEmail("");
    }
  };
  return (
    <div>
      {/* <h1>
        My name is {name} and my email address is {email}
      </h1> */}

      <form>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          id="name"
          name="name"
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          id="email"
          name="email"
        />

        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
