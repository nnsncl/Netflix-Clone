import React from 'react'
import { Link as ReachRouterLink } from 'react-router-dom'

import {
    Background,
    Container,
    Logotype,
    ButtonLink,
    Group,
    Link,
} from './styles/header'

export default function Header({
    background = true,
    children,
    ...restProps }) {
    return background ?
        <Background {...restProps}>{children}</Background>
        : children
}

Header.Frame = function HeaderFrame({ children, ...resttProps }) {
    return <Container {...resttProps}>{children}</Container>
}

Header.Logotype = function HeaderLogotype({ to, ...restProps }) {
    return (
        <ReachRouterLink to={to}>
            <Logotype {...restProps} />
        </ReachRouterLink>
    )
}

Header.ButtonLink = function HeaderButtonLink ({ to, children, ...restProps }) {
    return <ButtonLink {...restProps} to={to} >{children}</ButtonLink>
}

Header.Group = function HeaderGroup({ children, ...restProps }){
    return <Group {...restProps}>{children}</Group>
}

Header.Link = function HeaderTextLink({ children, ...restProps }){
    return <Link {...restProps}>{children}</Link>
}