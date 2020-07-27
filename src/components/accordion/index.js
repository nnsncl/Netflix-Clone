import React, { useState, useContext, createContext } from 'react'
import { Container, Inner, Frame, Item, Title, Header, Body } from './styles/accordion'

const AccordionContext = createContext()

export default function Accordion({ children, ...restProps }) {
    return (
        <Container {...restProps} >
            <Inner>{children}</Inner>
        </Container>
    )
}

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>;
}

Accordion.Item = function AccordionItem({ children, ...restProps }) {
    const [toggleAccordion, setToggleAccordion] = useState(false)

    return (
        <AccordionContext.Provider value={{ toggleAccordion, setToggleAccordion }}>
            <Item {...restProps}>{children}</Item>
        </AccordionContext.Provider>
    )
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
    const { toggleAccordion, setToggleAccordion } = useContext(AccordionContext)

    return (
        <Header onClick={() => setToggleAccordion(!toggleAccordion)} {...restProps}>
            {children}
            {toggleAccordion ? (
                <img src="/images/icons/close-slim.png" alt="Close icon" />
            ) : (
                <img src="/images/icons/add.png" alt="Open icon" />
                )
            }
        </Header>
    )
}

Accordion.Body = function AccordionBody({ children, ...restProps }) {
    const { toggleAccordion } = useContext(AccordionContext)
    return toggleAccordion ? <Body {...restProps}>{children}</Body> : ''
}