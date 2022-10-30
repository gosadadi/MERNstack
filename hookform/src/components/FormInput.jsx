import React, { useState } from 'react';
const FormInput = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName,lastName, email, password,confirmPassword };
        console.log("Welcome", newUser);
    };
    const handleFirst = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2) {
            setFirstNameError("The field must be at least 2 characters!");
        }
        else{
            setFirstNameError("");
        }
    }
    const handleLast = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 2) {
            setLastNameError("The field must be at least 2 characters!");
            
        
        }
        else {
            setLastNameError("");
        }
        
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value)
        if(e.target.value.length<5){
            setEmailError("The field must be at least 5 characters");
        }
        else{
            setEmailError("");
        }
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value);
        if(e.target.value.length < 8){
            setPasswordError("The passwords must match and be at least 8 characters");
        
        }
        else{
            setPasswordError("");
        }
    }
    const handleConfirmPassword=(e)=>{
        setConfirmPassword(e.target.value);
        if(e.target.value.length < 8 ){
            setConfirmPasswordError("The passwords must match and be at least 8 characters");
        
        }
        
        else{
            setConfirmPasswordError("");
        }
    }
    return (
        <>
        <form onSubmit={createUser}>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={handleFirst} />
                {
                    firstNameError ?
                    <p style={{color:'red'}}>{ firstNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={handleLast} />
                {
                    lastNameError ?
                    <p style={{color:'red'}}>{ lastNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" onChange={handleEmail} />
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }

            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={handlePassword} />
                {
                    passwordError ?
                    <p style={{color:'red'}}>{passwordError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={handleConfirmPassword} />
                {
                    confirmPasswordError && password !== confirmPassword ?
                    <p style={{color:'red'}}>{confirmPasswordError}</p> :
                    ''
                }
            </div>
            <input type="submit" value="Create User" />
        </form>
        <p>Your Form Data</p>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmPassword}</p>
        </>
    );
};
export default FormInput;

