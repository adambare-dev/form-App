
import React, { useState } from 'react'
//validate userName
function validateUserName(userName) {
    const rgx = /^[A-Za-z]{4,}$/;
    return rgx.test(userName);
};
//validate email
function validateEamil(email) {
    const rgx = /^[^\s@]+@[^\s@]+\.[^\s@]{3,}/;
    return rgx.test(email);
}
// validate password
function validatePassword(password) {
    const rgx = /^.{6,}$/;
    return rgx.test(password);
}
const inputStyle = { borderColor: "red" };

//jsx part
function FormValidat2() {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [errorElement, setErrorElement] = useState({});

    function hundleOnChange(e) {
        const { name, value } = e.target;
        // setUserData({ ...userData, [name]: value });
        setUserData((prev) => {
            return { ...prev, [name]: value };
        })

        // setUserData((prev) => ({
        //     ...prev, [name]: value
        // }))
        let err = "";
        //validate name
        if (name === "name") {
            if (!validateUserName(value.trim())) {
                err = 'invalid name'
            }
        };

        if (name === 'email') {
            if (!validateEamil(value)) {
                err = "invalid email";
            }
        };

        if (name === "password") {
            if (!validatePassword(value)) {
                err = "invalid password"
            } else if (value < 6) {
                newError = "too short"
            }
        }
        // setErrorElement((prev) => (
        //     { ...prev, [name]: newError }
        // ));
        setErrorElement((prev) => {
            return { ...prev, [name]: err }
        });
        //Alternative way
        //  setErrorElement({ ...errorElement, [name]: newError });

        
       
    };
    // hundling submit actions
    function hundleOnsubmit(e) {
        e.preventDefault();

        const newError = {};
        // validet name
        if (!validateUserName(userData.name)) {
            newError.name = "invalid name"

        }
        if (!validateEamil(userData.email)) {
            newError.email = "invalid email"

        };
        //validate pass
        if (!validatePassword(userData.password)) {
            newError.password = "invalid password"

        };
        const isFormValid = validateUserName(userData.name)
            && validateEamil(userData.email)
            && validatePassword(userData.password);

        if (!isFormValid) {
            setErrorElement(newError);
            console.log(isFormValid);
            return
        };


        setUserData({
            name: "",
            email: "",
            password: ""
        });
    };
    const errorElementStyle = { color: "red" }

    return (
        <div>
            <form action="" onSubmit={hundleOnsubmit}>
                <h2>sing up</h2>
                <input type="text"
                    name='name'
                    value={userData.name}
                    onChange={hundleOnChange}
                    placeholder='enter your name'
                    style={errorElement.name ? inputStyle : { borderColor: null }} />
                <br />
                <small style={errorElementStyle}>{errorElement.name}</small>
                <br /><br />

                <input type="text"
                    name='email'
                    value={userData.email}
                    onChange={hundleOnChange}
                    placeholder='enter your email'
                    style={errorElement.email ? inputStyle : { borderColor: null }}
                />
                <br />
                <small style={errorElementStyle}>{errorElement.email}</small>
                <br /><br />
                <input type="text"
                    name='password'
                    value={userData.password}
                    onChange={hundleOnChange}
                    placeholder='enter your password'
                    style={errorElement.password ? inputStyle : { borderColor: null }}
                />
                <br />
                <small style={errorElementStyle}>{errorElement.password}</small>
                <br /><br />
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default FormValidat2