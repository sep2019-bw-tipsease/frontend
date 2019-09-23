import React from 'react'
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';
import { Link } from 'react-router-dom'

const Login = () => {




    const userLogin = e => {

    }

    const handleChange = e => {

    }
    return (
        <>

            <div>
                <Container className="reg-page">
                    <Form className="form" onSubmit={userLogin}>
                        <Col>
                            <FormGroup>

                            </FormGroup>
                            <FormGroup>
                                <Label>Email</Label>
                                <Input
                                    type="text"
                                    name="username"
                                    id="exampleEmail"
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
                                    id="examplePassword"
                                    placeholder="********"
                                    onChange={handleChange}
                                />
                            </FormGroup>
                        </Col>
                        <div className='button-cont'><Button type='submit' >Log In</Button> <Link to='/register'><Button>Register</Button></Link></div>
                    </Form>
                </Container>
            </div>
        </>
    )
}

export default Login;