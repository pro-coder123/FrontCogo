import logo from './logo.svg';
import './Register.css';
import React from 'react';
import ReactDOM from 'react-dom';


function handleSubmit(e) {

    e.preventDefault()
    const { username, name, email } = e.target.elements
    console.log({ username: username.value, name: name.value, email: email.value })
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ student: { username: username.value, name: name.value, email: email.value } })
    };


    const response = fetch('http://localhost:4000/students', requestOptions).then((response) => {
        console.log('response:', response.status)
        if (response.status === 422) {
            alert("Please fill out all the fields")
        } else {
            alert("Sucessfully submitted")
        }

    });

}

function Register() {

    return (
        <div>
            <a class="button" href="/">Back</a>

            <div class="login-box">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>

                    <div class="user-box">
                        <input type="text" id="username" name="" required="" />
                        <label>Username</label>
                    </div>
                    <div class="user-box">
                        <input type="text" id="name" name="" required="" />
                        <label>Name</label>
                    </div>
                    <div class="user-box">
                        <input type="text" id="email" name="" required="" />
                        <label>Email</label>
                    </div>
                    <input type="submit" value="Register" />
                </form>
            </div>
        </div>
    )
}

export default Register;
