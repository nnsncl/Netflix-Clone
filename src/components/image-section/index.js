import React from 'react'

import { Container, Frame, Content, Text } from './styles/ImageSection'

export default function ImageSection({ children, ...restProps }){
    return <Container {...restProps}>{children}</Container>
}

ImageSection.Frame = function ImageSectionFrame({ children, ...restProps }){
    return <Frame {...restProps} >{children}</Frame>
}

ImageSection.Content = function ImageSectionContent({src, alt, ...restProps}){
    return <Content src={src} alt={alt} {...restProps} />
}

ImageSection.Text = function ImageSectionText({children, ...restProps}){
    return <Text {...restProps} >{children}</Text>
}