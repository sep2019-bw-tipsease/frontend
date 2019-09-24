import React, { useState, useEffect } from 'react'
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';
import logo from '../images/logo.png'
import styled from 'styled-components'


const Login = props => {


    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });

    const handleChange = e => {
        // console.log(e)
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
        console.log(setCredentials)
    };

    const userLogin = e => {
        e.preventDefault();
    }

    return (

        <LoginStyle>
            <img src={logo} alt='logo' />
            <Container className="login">
                <h2>Returning User? Sign in here</h2>

                <Form className="form" onSubmit={userLogin} >
                    <Col>
                        <FormGroup>

                        </FormGroup>
                        <FormGroup>
                            <Label>Username</Label>
                            <Input
                                key='abc'
                                type="text"
                                name="username"
                                value={credentials.username}
                                placeholder="username"
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                value={credentials.password}
                                placeholder="********"
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </Col>
                    <div className='button-cont'><Button type='submit' >Log In</Button></div>
                </Form>
            </Container>
        </LoginStyle>

    )
}

const LoginStyle = styled.div`
display: flex;
flex-direction: column;

align-items: center;
img {
    width: 25rem;
}
.login {
    width: 30rem;
    .button-cont {
        display: flex;
        justify-content: center;
        button {
            width: 8rem;
            background: #6E588A;
            
        }
    }

}
`;

export default Login;