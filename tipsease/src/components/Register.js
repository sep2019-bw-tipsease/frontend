import React from 'react'
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';
import styled from 'styled-components'


const Register = () => {

    const RegForm = styled.div`
        margin-top: 10%;
       .reg-page {
           display: flex;
           flex-direction: column;
           
           h2 {
               align-self: center;
           }
           .form {
                .button-cont {
                    text-align: center;
                }
           }
       }
    `;

    const handleChange = e => {

    }

    const regUser = e => {

    }

    return (
        <RegForm>
            <Container className="reg-page">
                <h2>Register</h2>
                <Form className="form" onSubmit={regUser}>
                    <Col>
                        <FormGroup>
                            <Label>First name</Label>
                            <Input
                                type="text"
                                name="first-name"
                                id="exampleEmail"
                                placeholder="First Name"
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Last name</Label>
                            <Input
                                type="text"
                                name="last-name"
                                id="exampleEmail"
                                placeholder="Last Name"
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="myemail@email.com"
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
                                id="examplePassword"
                                placeholder="********"
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleConfirmPassword">Confirm Password</Label>
                            <Input
                                type="password"
                                name="confirmPassword"
                                id="examplePassword"
                                placeholder="********"
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </Col>
                    <div className='button-cont'><Button type='submit' >Submit</Button></div>
                </Form>
            </Container>
        </RegForm>
    )
}

export default Register;