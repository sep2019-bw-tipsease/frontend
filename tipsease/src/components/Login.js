import React from 'react'
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import styled from 'styled-components'

const Login = () => {
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

    const userLogin = e => {
        e.preventDefault();
    }

    const handleChange = e => {

    }
    return (

        <LoginStyle>
            <img src={logo} />
            <Container className="login">

                <h2>Returning User? Sign in here</h2>
                <Form className="form" onSubmit={userLogin}>
                    <Col>
                        <FormGroup>

                        </FormGroup>
                        <FormGroup>
                            <Label>Username</Label>
                            <Input
                                type="text"
                                name="username"

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
export default Login;