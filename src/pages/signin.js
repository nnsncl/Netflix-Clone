import React, { useState } from 'react';
import { Form } from '../components'
import { HeaderContainer } from '../containers/header'

export default function Signin() {
    const [error, setError] = useState('');
    const [emailValue, setEmailValue] = useState('')
    const [password, setPaswword] = useState('')

    const handleSignIn = (event) => {
        event.preventDefault()
        // call in here to firebase to authenticate the user
        // if there's an error, populate the error state
    }

    return (
        <HeaderContainer>
            <Form>
               
                {error && <Form.Helper>{error}</Form.Helper>}

                <Form.Container onSubmit={handleSignIn} method="POST">
                <Form.Title>Sign In</Form.Title>
                    <Form.Input
                        placeholder='Email adress'
                        value={emailValue}
                        onChange={({ target }) => setEmailValue(target.value)}
                    />
                    <Form.Input
                        type='password'
                        autoComplete='off'
                        placeholder='••••••••'
                        value={password}
                        onChange={({ target }) => setPaswword(target.value)}
                    />
                    <Form.Button
                        disabled={false}
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
    )
}