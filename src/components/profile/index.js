import React from 'react'
import { Container, Title, List, User, Picture, UserName } from './styles/profile'

export default function Profile({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Profile.Title = function ProfileTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Profile.List = function ProfileList({children, ...restProps}){
    return <List {...restProps}>{children}</List>
}

Profile.User = function ProfileUser({children, ...restProps}){
    return <User {...restProps}>{children}</User>
}

Profile.Picture = function ProfilePicture({src, ...restProps}){
    return <Picture {...restProps} src={src ? `/images/users/${src}.png` : '/images/misc/loading.gif'} />
}

Profile.UserName = function ProfileUserName({children, ...restProps}){
    return <UserName {...restProps}>{children}</UserName>
}
