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
        e.preventDefault()
    }

    return (
        <RegForm>
            <Container className="reg-page">
                <h2>Register</h2>
                <Form className="form" onSubmit={regUser}>
                    <Col>
                        <FormGroup>
                            <Label>Username</Label>
                            <Input
                                type="text"
                                name="user-name"
                                placeholder="User name"
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>First name</Label>
                            <Input
                                type="text"
                                name="first-name"

                                placeholder="First Name"
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </Col>
                    <Col >
                        <FormGroup>
                            <Label>Last name</Label>
                            <Input
                                type="text"
                                name="last-name"

                                placeholder="Last Name"
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </Col>
                    <Col >
                        <FormGroup>
                            <Label for="exampleSelect">Select</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>Worker</option>
                                <option>Customer</option>

                            </Input>
                        </FormGroup>
                    </Col>

                    <div className='button-cont'><Button type='submit' >Submit</Button></div>
                </Form>
            </Container>
        </RegForm>
    )
}

export default Register;