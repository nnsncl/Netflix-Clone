import React, { useState, useContext } from 'react'

import { useHistory } from 'react-router-dom'

import { FirebaseContext } from '../context/firebase'

import { HeaderContainer } from '../containers/header'
import { Form } from '../components'
import { FooterContainer } from '../containers/footer'

import * as ROUTES from '../constants/routes';


export default function Signup() {

    const history = useHistory()

    const { firebase } = useContext(FirebaseContext)

    const [error, setError] = useState('');
    const [firstName, setFirstName] = useState('')
    const [emailAddress, setemailAddress] = useState('')
    const [password, setPaswword] = useState('')

    const formValidation = firstName === '' || emailAddress === '' || !emailAddress.includes('@') || password === '' || password.length < 8

    const handleSignUp = (event) => {
        event.preventDefault()

        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) => 
                result.user
                .updateProfile({
                    displayName: firstName,
                    photoURL: Math.floor(Math.random() * 5 ) + 1,
                })
                .then(() => {
                    setemailAddress('');
                    setPaswword('')
                    setError('')
                    history.push(ROUTES.BROWSE)
                })
            ).catch((error) => setError(error.message))

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