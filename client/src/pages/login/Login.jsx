import React, { Component } from "react";
import { TextInput, Row, Col, Button, Icon } from "react-materialize";
import Loading from "../../layout/loading/Loading";
import axios from "axios";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            loading: false,
            errorMessage: ""
        };
    }

    handleChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        const { email, password } = this.state;
        this.setState({
            loading: true
        });
        e.preventDefault();
        axios
            .post(`http://localhost:3000/accounts/login`, {
                email,
                password
            })
            .then(response => {
                response.data.authenticated = true;
                this.props.authenticate(response.data);
                this.setState({
                    loading: false,
                    errorMessage: ""
                });
            })
            .catch(error => {
                this.setState({
                    errorMessage: "Incorrect Email or Password",
                    loading: false
                });
            });
    };
    render() {
        const { loading, errorMessage } = this.state;
        return (
            <div style={{ marginTop: "70px" }}>
                <Row>
                    <Col m={4}></Col>
                    <Col m={4}>
                        <h3> Login</h3>
                    </Col>
                    <Col m={4}></Col>
                </Row>

                <form
                    method='POST'
                    onSubmit={this.handleSubmit}
                    className='col s12'
                >
                    <TextInput
                        name='email'
                        email
                        label='Email'
                        validate
                        required
                        onChange={this.handleChange}
                    />

                    <TextInput
                        label='Password'
                        name='password'
                        password
                        required
                        onChange={this.handleChange}
                    />

                    {errorMessage && (
                        <div className='red-text text-accent-2'>
                            {errorMessage}
                        </div>
                    )}
                    <br />
                    {!loading ? (
                        <Button node='button' waves='light'>
                            Login
                            <Icon right>send</Icon>
                        </Button>
                    ) : (
                        <Loading />
                    )}
                     <br/>
                    <br/>
                    <a href="/forgotpassword">Forgot your password?</a>
                   
                    

                </form>
            </div>
        );
    }
}

export default Login
