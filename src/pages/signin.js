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
                <Form.Title>Sign In</Form.Title>
                {error && <Form.Helper>{error}</Form.Helper>}

                <Form.Container onSubmit={handleSignIn}  method="POST">
                    <Form.Input
                        placeholder='Email adress'
                        value={emailValue}
                        onChange={({ target }) => setEmailValue(target.value)}
                    />
                    <Form.Input
                        placeholder='Email adress'
                        value={password}
                        onChange={({ target }) => setPaswword(target.value)}
                    />
                    <Form.Button></Form.Button>
                </Form.Container>
            </Form>
        </HeaderContainer>
    )
}