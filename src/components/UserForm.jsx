import React, { useState } from 'react';
import styles from './UserForm.module.css';


const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [pw1, setPw1] = useState("");
    const [pw2, setPw2] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [pwError, setPwError] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        if(firstName.length < 2 && firstName.length > 0) {
            setFirstNameError("First name must be at least 2 characters.")
        }
        else if(lastName.length < 2 && lastName.length > 0) {
            setLastNameError("Last name must be at least 2 characters.")
        }
        else if(email.length < 5 && email.length > 0) {
            setEmailError("Email must be at least 5 characters.")
        }
        else if(pw1 !== pw2) {
            setPwError("Passwords must match.")
        }
        else {
            setHasBeenSubmitted( true );
        }
    }

    // const createUser = (e) => {
    //     e.preventDefault();
    //     const newUser = { firstName, lastName, email, pw1, pw2 };
    //     console.log("Welcome", newUser);
    //     setHasBeenSubmitted(true);
    // };

    return (
        <>
            {
                hasBeenSubmitted ?
                <h3>Thanks for filling out the form! Have a cookie.</h3> :
                <h3>Please submit the form.</h3>
            }
                <h3>Form</h3>
            <form onSubmit={onSubmit}>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} />
                    {
                        firstNameError ?
                        <p style={{color:'red'}}>{ firstNameError }</p>:
                        ''
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={(e) => setLastName(e.target.value)} />
                    {
                        lastNameError ?
                        <p style={{color:'red'}}>{ lastNameError }</p>:
                        ''
                    }
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} />
                    {
                        emailError ?
                        <p style={{color:'red'}}>{ emailError }</p>:
                        ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={(e) => setPw1(e.target.value)} />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={(e) => setPw2(e.target.value)} />
                    {
                        pwError ?
                        <p style={{color:'red'}}>{ pwError }</p>:
                        ''
                    }
                </div>
                <input className={styles.submit} type="submit" value="Create User" />
            </form>
            <h4>Your Form Data</h4>
            <div className={styles.results}>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {pw1}</p>
                <p>Confirm Password: {pw2}</p>
            </div>
        </>
    );
};

export default UserForm;
