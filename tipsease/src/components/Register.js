import React, { useState } from 'react'
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';
import styled from 'styled-components'
import logo from '../images/logo.png'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import axios from 'axios'

const Register = props => {

    const [newUser, setNewUser] = useState({
        username: '',
        password: '',
        first_name: '',
        last_name: '',
        role: ''
    })

    const handleChange = e => {
        // console.log(e, 'onchange')
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
        // console.log(newUser)
    }

    const regUser = e => {
        e.preventDefault()
        console.log(newUser)
        axios
            .post('https://tipsease-app.herokuapp.com/api/users/register', newUser)
            .then(res => {
                // console.log(res)
                props.history.push('/login')
            })
            .catch(err => console.log(err, 'error on register'))
    }

    return (
        <RegForm>
            <img src={logo} alt='logo' />
            <Container className="reg">
                <h2>New user? Register here</h2>
                <Form className="form" onSubmit={regUser}>

                    <Col>
                        <FormGroup>
                            <Label>username</Label>
                            <Input
                                type="text"
                                name="username"
                                placeholder="username"
                                onChange={handleChange}
                                value={newUser.username}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>password</Label>
                            <Input
                                type="password"
                                name="password"
                                placeholder="password"
                                onChange={handleChange}
                                value={newUser.password}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>First name</Label>
                            <Input
                                type="text"
                                name="first_name"
                                placeholder="First Name"
                                onChange={handleChange}
                                value={newUser.first_name}
                            />
                        </FormGroup>
                    </Col>
                    <Col >
                        <FormGroup>
                            <Label>Last name</Label>
                            <Input
                                type="text"
                                name="last_name"
                                placeholder="Last Name"
                                onChange={handleChange}
                                value={newUser.last_name}
                            />
                        </FormGroup>
                    </Col>
                    <Col >
                        <FormGroup>
                            <Label for="exampleSelect">Role</Label>
                            <Input type="select" name="role" id="exampleSelect" onChange={handleChange} defaultValue='worker'>
                                <option>worker</option>
                                <option>customer</option>

                            </Input>
                        </FormGroup>
                    </Col>

                    <div className='button-cont'><Button type='submit' >Submit</Button></div>
                </Form>
            </Container>
        </RegForm>
    )
}

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

export default Register;