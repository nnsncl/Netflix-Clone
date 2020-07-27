import React from 'react'
import { Link as ReachRouterLink } from 'react-router-dom'

import { Background, Container, Logotype, ButtonLink } from './styles/header'

export default function Header({
    background = true,
    children,
    ...resttProps }) {
    return background ?
        <Background {...resttProps}>{children}</Background>
        : children
}

Header.Frame = function HeaderFrame({ children, ...resttProps }) {
    return <Container {...resttProps}>{children}</Container>
}

Header.Logotype = function HeaderLogotype({ to, ...resttProps }) {
    return (
        <ReachRouterLink to={to}>
            <Logotype {...resttProps} />
        </ReachRouterLink>
    )
}

Header.ButtonLink = function HeaderButtonLink ({ to, children, ...restProps }) {
    return <ButtonLink {...restProps} to={to} >{children}</ButtonLink>
}