import React from 'react'
import { Feature } from '../components'

export function FeatureContainer() {
    return (
        <>
        <Feature>
            <Feature.Title>Watch anywhere.</Feature.Title>
            <Feature.Subtitle>Unlimited movies, TV shows, and more.</Feature.Subtitle>
            <Feature.Link  to="/signup">Get Started</Feature.Link>
            {/* <OptForm>
                <OptForm.Input placeholder='Email adress' />
                <OptForm.Button>
                    Get Started
                </OptForm.Button>
                <OptForm.Content>
                    Ready to watch? Enter your email to create or restart your membership.
                </OptForm.Content>
            </OptForm> */}
        </Feature>
        </>

    )
}