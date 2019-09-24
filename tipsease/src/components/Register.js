import React from 'react'
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';
import styled from 'styled-components'
import logo from '../images/logo.png'


const Register = () => {

    const RegForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
       img {
           width: 25rem;
       }
       .reg {
           margin: 0;
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

    const handleChange = e => {

    }

    const regUser = e => {
        e.preventDefault()
    }

    return (
        <RegForm>
            <img src={logo} alt='logo' />
            <Container className="reg">
                <h2>New user? Register here</h2>
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
                            <Label for="exampleSelect">Role</Label>
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