import React, { useState } from 'react'
import { Link as ReachRouterLink } from 'react-router-dom'

import {
    Background,
    Container,
    Feature,
    Logotype,
    LogoTitle,
    Title,
    Content,
    Button,
    ButtonLink,
    Group,
    Link,
    Search,
    SearchIcon,
    SearchInput,
    Profile,
    Picture,
    Dropdown,

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

Header.Feature = function HeaderFeature({ children, ...restProps }) {
    return <Feature {...restProps}>{children}</Feature>
}

Header.Logotype = function HeaderLogotype({ to, ...restProps }) {
    return (
        <ReachRouterLink to={to}>
            <Logotype {...restProps} />
        </ReachRouterLink>
    )
}

Header.LogoTitle = function HeaderLogoTitle({ src, alt, ...restProps }) {
    return <LogoTitle src={src} alt={alt} {...restProps} />
}

Header.Title = function HeaderTitle({ children, ...restProps }) {
    return <Title {...restProps} >{children}</Title>
}

Header.Content = function HeaderContent({ children, ...restProps }) {
    return <Content {...restProps} >{children}</Content>
}

Header.Button = function HeaderButton({ children, ...restProps }) {
    return <Button {...restProps} >{children}</Button>
}

Header.ButtonLink = function HeaderButtonLink({ to, children, ...restProps }) {
    return <ButtonLink {...restProps} to={to} >{children}</ButtonLink>
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
}

Header.Link = function HeaderTextLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}

Header.Search = function HeaderSearch({ searchValue, setSearchValue, ...restProps }) {

    const [searchActive, setSearchActive] = useState(false)

    return <Search {...restProps} >
        <SearchIcon onClick={() => setSearchActive(!searchActive)}>
            <img src='/images/icons/search.png' alt='Search' />
        </SearchIcon>
        <SearchInput
            value={searchValue}
            onChange={({ target }) => setSearchValue(target.value)}
            placeholder='Search'
            active={searchActive}
        />
    </Search>
}


Header.Profile = function HeaderProfile({ children, ...restProps }) {
    return <Profile {...restProps}>{children}</Profile>
}

Header.Picture = function HeaderPicture({ src, ...restProps }){
    return <Picture src={`/images/users/${src}.png`} { ...restProps } />
}

Header.Dropdown = function HeaderDropdown({ children, ...restProps }){
    return <Dropdown {...restProps} >{children}</Dropdown>
}

