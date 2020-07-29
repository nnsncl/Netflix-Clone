import React from 'react'

import {
    Frame,
    Input,
    Button,
    Title,
    Content,
    ContentSmall,
    Link,
    Helper,
    Container } from './styles/form'

export default function Form({children, ...restProps}){
    return <Container {...restProps} >{children}</Container>
}

Form.Container = function FormContainer({children, ...restProps}){
    return <Frame {...restProps} >{children}</Frame>
}

Form.Input = function FormInput({ placeholder, type, value, ...restProps }){
    return <Input placeholder={placeholder} type={type} value={value} {...restProps} />
}

Form.Button = function FormButton({ children, ...restProps }){
    return <Button {...restProps} >{children}</Button>
}

Form.Content = function FormContent({children, ...restProps}){
    return <Title {...restProps} >{children}</Title>
}

Form.Content = function FormContent({children, ...restProps}){
    return <Content {...restProps} >{children}</Content>
}

Form.ContentSmall = function FormContentSmall({children, ...restProps}){
    return <ContentSmall {...restProps} >{children}</ContentSmall>
}

Form.Link = function FormLink({children, ...restProps}){
    return <Link {...restProps} >{children}</Link>
}

Form.Helper = function FormHelper({error, children, ...restProps}){
    return <Helper {...restProps}>{children}</Helper>
}