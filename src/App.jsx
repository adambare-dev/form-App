
import React, { useState } from 'react'
import './index.css'
import FormValidation from './FormValidation';
function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({});


  function hundleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  function hundleSubmit(e) {
    e.preventDefault();
    let newErrors = {};
    /* if (formData.name === "" || formData.email === "" || formData.password === "") {
     console.log("something went wrong please try again");
     alert = "form submision failed"
   } else {
     console.log(formData);
   };  */

    if (!formData.name.trim()) {
      newErrors.name = "name is required"
    }
    if (!formData.email.trim()) {
      newErrors.email = "email is required"
    }
    if (!formData.password.trim()) {
      newErrors.password = "password is required"
    }
    setErrors(newErrors);


    setFormData({
      name: "",
      email: "",
      password: ""
    });

  };

  return (
    <div>
      <h3>form project</h3>
      {/* <form action="" onSubmit={hundleSubmit}>
        <input type="text"
          name='name'
          value={formData.name}
          placeholder='enter our name'
          onChange={hundleChange} />
        <br />
        <small style={{ color: "red" }}>{errors.name}</small>

        <br /><br />
        <input type="email"
          name='email'
          value={formData.email}
          placeholder='enter your email'
          onChange={hundleChange}
        />
        <br />
        <small style={{ color: "red" }}>{errors.email}</small>
        <br /><br />
        <input type="password"
          name='password'
          value={formData.password}
          placeholder='enter your password'
          onChange={hundleChange} />
        <br />
        <small style={{ color: "red" }}>{errors.password}</small>
        <br /><br />
        <button type='submit'>submit</button>

      </form> */}
      <FormValidation />

    </div>
  )
}

export default App