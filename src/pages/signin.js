import React, { useState, useContext } from 'react'

import { useHistory } from 'react-router-dom'

import { FirebaseContext } from '../context/firebase'

import { HeaderContainer } from '../containers/header'
import { Form } from '../components'
import { FooterContainer } from '../containers/footer'

import * as ROUTES from '../constants/routes';

export default function Signin() {

    const history = useHistory()

    const { firebase } = useContext(FirebaseContext)

    const [error, setError] = useState('');
    const [emailAddress, setemailAddress] = useState('')
    const [password, setPaswword] = useState('')

    const formValidation = emailAddress === '' || !emailAddress.includes('@') || password === '' || password.length < 8

    const handleSignIn = (event) => {
        event.preventDefault()

        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                setemailAddress('');
                setPaswword('')
                setError('')
                history.push(ROUTES.BROWSE)
            }
            ).catch((error) => setError(error.message))
    }

    return (
        <>
            <HeaderContainer >
                <Form>
                    {error && <Form.Helper>{error}</Form.Helper>}
                    <Form.Container onSubmit={handleSignIn} method="POST">
                        <Form.Title>Sign In</Form.Title>
                        <Form.Input
                            type='email'
                            placeholder='Email adress'
                            value={emailAddress}
                            onChange={({ target }) => setemailAddress(target.value)}
                        />
                        <Form.Input
                            type='password'
                            autoComplete='off'
                            placeholder='Password'
                            value={password}
                            onChange={({ target }) => setPaswword(target.value)}
                        />
                        <Form.Helper>Password must include at least 8 characters.</Form.Helper>
                        <Form.Button
                            disabled={formValidation}
                            type="submit" >
                            Sign In
                        </Form.Button>
                        <Form.Content>
                            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
                        </Form.Content>
                        <Form.ContentSmall>
                            This page is protected by Google reCAPTCHA.
                    </Form.ContentSmall>
                    </Form.Container>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}