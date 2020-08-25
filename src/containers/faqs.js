import React from 'react'
import { Accordion, Feature } from '../components'
import FaqsData from '../json/faqs.json'

export function FaqsContainer() {
    return (
        <>
            <Accordion>
                <Accordion.Title>Fequently Asked Questions</Accordion.Title>
                <Accordion.Frame>
                    {FaqsData.map((item) => (
                        <Accordion.Item key={item.id}>
                            <Accordion.Header>{item.header}</Accordion.Header>
                            <Accordion.Body>{item.body}</Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion.Frame>
            </Accordion>
            <Feature>
                <Feature.Link to="/signup">Get Started</Feature.Link>
            </Feature>
        </>
    )
}