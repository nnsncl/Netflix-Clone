import React, { useState } from 'react';
import { Form } from '../components'
import { HeaderContainer } from '../containers/header'

export default function Signin() {
    const [error, setError] = useState('');
    
    return (
        <HeaderContainer>
            <Form>
                <Form.Title>Sign In</Form.Title>
                {error && <Form.Helper>{error}</Form.Helper>}
            </Form>
        </HeaderContainer>
    )
}