//her is for some logics
<input
  type="text"
  name="name"
  style={inputErrors.name ? inputStyle : {}}
/>
//validate onchannge\
function handleUserInput(e) {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });

    // live validation
    let error = {};

    if (name === "name" && !validateName(value)) {
        error = "invalid name";
    }

    if (name === "email" && !validateEamil(value)) {
        error = "invalid email";
    }

    setInputErrors({ ...inputErrors, [name]: error });
}