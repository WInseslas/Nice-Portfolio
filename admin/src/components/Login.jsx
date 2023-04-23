/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

export default function Login(props) {

    // const { error } = props.location.state || { error: null }; 

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email.includes('@') || password.length < 5) {
            setErrorMsg('Invalid email or password');
        } else {
            try {
                const response = await fetch('http://127.0.0.1:3030/api/user/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password
                    })
                });

                if (!response.ok) {
                    if (response.status === 401) {
                        console.log(response);
                        throw new Error('Invalid email or password');
                    } else if (response.status === 404) {
                        throw new Error('Not found');
                    } else if (response.status === 500) {
                        throw new Error('An error has occurred. Please try again in a few moments.');
                    } else {
                        throw new Error('Login failed');
                    }
                }

                const data = await response.json();
                console.log(data)
                // Rediriger l'utilisateur vers la page d'accueil
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', data.data);
                window.location.href = '/Dashboard';

            } catch (error) {
                setErrorMsg(error.message);
            }
        }
    };

    return (
        <div className="bg-gradient-dark">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12 col-md-9">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image">
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <br /><br />
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                            </div>
                                            <form onSubmit={handleSubmit} className="user">
                                                <div className="form-group">
                                                    <input
                                                        type="email"
                                                        className="form-control form-control-user"
                                                        id="email"
                                                        aria-describedby="emailHelp"
                                                        placeholder="Enter Email Address..."
                                                        value={email}
                                                        onChange={handleEmailChange}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="password"
                                                        className="form-control form-control-user"
                                                        id="password"
                                                        placeholder="Password"
                                                        required
                                                        minLength={5}
                                                        value={password}
                                                        onChange={handlePasswordChange}
                                                    />
                                                </div>

                                                <button
                                                    type="submit"
                                                    className="btn btn-primary btn-user btn-block"
                                                    disabled={!email || !password}
                                                >
                                                    Login
                                                </button>
                                            </form>
                                            <hr />
                                            <div className="text-center">
                                                <a className="small" href="#">
                                                    Forgot Password?
                                                </a>
                                            </div>
                                            <br />

                                            {errorMsg && (
                                                <div style={{ textAlign: "center" }} className="alert alert-danger" role="alert">
                                                    {errorMsg}
                                                </div>
                                            )}
                                            <br />
                                            {/* {error && <p style={{marginBottom: "20px", color: 'red' }}>{decodeURI(error)}</p>}    */}
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
