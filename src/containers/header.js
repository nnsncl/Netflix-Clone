import React from 'react'
import { Header } from '../components'
import * as ROUTES from '../constants/routes'


export function HeaderContainer({ children }) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logotype
                    to={ROUTES.HOME}
                    src="/images/misc/logo.svg"
                    alt='Logotype Netflix'
                    />
                <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}