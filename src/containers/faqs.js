import React from 'react'
import { Accordion, OptForm } from '../components'
import FaqsData from '../json/faqs.json'

export function FaqsContainer() {
    return (
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
            <OptForm>
                <OptForm.Input placeholder='Email adress'>

                </OptForm.Input>
                <OptForm.Button>
                    Get Started
                </OptForm.Button>
            </OptForm>
            <OptForm.Content>
                    Ready to watch? Enter your email to create or restart your membership.
                </OptForm.Content>
        </Accordion>
    )
}