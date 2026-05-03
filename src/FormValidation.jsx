import React, { useState } from 'react'
import './index.css'
const inputStyle = { borderColor: "red" }
function validateName(name) {
    const rgx = /^[A-Za-z]{4,}$/;
    return rgx.test(name);
};
function validateEamil(email) {
    const rgx = /^[^\s@]+@[^\s@]+\.[^\s@]{3,}/;
    return rgx.test(email);
}
function FormValidation() {
    const [userData, setUserData] = useState({
        name: "",
        email: ""
    });
    //error inputs
    const [inputErrors, setInputErrors] = useState({});
    //hundleling user inputs
    function hundleUserInput(e) {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
        //hundling onchage errors
        let err = "";
        if (name === "name" && !validateName(value.trim())) {
            err = "error! name is not valid!"
        }
        if (name === "email" && !validateEamil(value.trim())) {
            err = "error! invalid email"
        };
        setInputErrors(prev => {
            return { ...prev, [name]: err }
        });
    };

    //hundle submit
    function hundleSubmitData(e) {
        e.preventDefault();

        let newInputErrr = {}
        if (!validateName(userData.name)) {
            newInputErrr.name = "invalid user name";
        }
        /*  if (!userData.name) {
             newInputErrr.name = "name is required"
         }
  */
        if (!validateEamil(userData.email)) {
            newInputErrr.email = "please enter valid email"
        }
        /*   if (!userData.email) {
              newInputErrr.email = "ivalid email"
          } */



        //only submit or log if no errors
        //
        // if (Object.keys(newInputErrr).length === 0) {
        //     console.log(userData);
        // } else {
        //     console.log("fix errors");
        // }
        //


        /* 
                if (!userData.name || !userData.email) {
                    setInputErrors(newInputErrr);
                    console.log("please fix errors");
                    return
                };
                console.log(userData);
                setUserData({
                    name: '',
                    email: ""
                }); */
        const isFormValid = validateName(userData.name) &&
            validateEamil(userData.email);
        if (!isFormValid) {
            setInputErrors(newInputErrr);
            console.log("please fix errors");
            return
        };
        console.log(isFormValid);
        console.log(userData);
        setUserData({
            name: '',
            email: ""
        });



    }
    return (
        <div>
            <form action="" onSubmit={hundleSubmitData}>
                <input type="text"
                    name='name'
                    value={userData.name}
                    placeholder='enter our name'
                    onChange={hundleUserInput}
                    style={inputErrors.name ? inputStyle : {}} />
                <br />
                {inputErrors && <small style={{ color: "red" }}>{inputErrors.name}</small>}
                {/* <small style={{ color: "red" }}>{inputErrors.name}</small> */}
                <br />
                <small></small>
                <br /><br />
                <input type="text"
                    name='email'
                    value={userData.email}
                    placeholder='enter your email'
                    onChange={hundleUserInput}
                    style={inputErrors.email ? inputStyle : { borderBlockColor: 'green' }}
                />
                <br />
                <small style={{ color: "red" }}>{inputErrors.email}</small>
                <br />
                <br />
                <button>submit</button>
            </form>
        </div>
    )
}

export default FormValidation