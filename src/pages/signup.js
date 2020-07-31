import React, { useState } from 'react'

import { HeaderContainer } from '../containers/header'
import { Form } from '../components'
import { FooterContainer } from '../containers/footer'
import * as ROUTES from '../constants/routes';

export default function Signup() {

    const [error, setError] = useState('');
    const [firstName, setFirstName] = useState('')
    const [emailValue, setEmailValue] = useState('')
    const [password, setPaswword] = useState('')

    const formValidation = firstName === '' || emailValue === '' || !emailValue.includes('@') || password === '' || password.length < 8

    const handleSignUp = (event) => {
        event.preventDefault()
        // call in here to firebase to authenticate the user
        // if there's an error, populate the error state
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Container onSubmit={handleSignUp} method="POST">
                        <Form.Title>Sign Up</Form.Title>
                        {error && <Form.Helper>{error}</Form.Helper>}
                        <Form.Input
                            type='text'
                            placeholder='First name'
                            value={firstName}
                            onChange={({ target }) => setFirstName(target.value)}
                        />
                        <Form.Input
                            type='email'
                            autoComplete='off'
                            placeholder='Email address'
                            value={emailValue}
                            onChange={({ target }) => setEmailValue(target.value)}
                        />
                        <Form.Input
                            type='password'
                            autoComplete='off'
                            placeholder='Password'
                            value={password}
                            onChange={({ target }) => setPaswword(target.value)}
                        />
                        <Form.Button
                            disabled={formValidation}
                            type="submit" >
                            Sign Up
                        </Form.Button>
                        <Form.Content>
                            Already have an account on Netflix? <Form.Link to="/signin">Sign in.</Form.Link>
                        </Form.Content>
                    </Form.Container>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}