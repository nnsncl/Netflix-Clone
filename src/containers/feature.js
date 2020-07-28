import React from 'react'
import { Feature, OptForm } from '../components'

export function FeatureContainer() {
    return (

        <Feature>
            <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
            <Feature.Subtitle>Watch anywhere. Cancel anytime.</Feature.Subtitle>
            <OptForm>
                <OptForm.Input placeholder='Email adress' />
                <OptForm.Button>
                    Get Started
                </OptForm.Button>
                <OptForm.Content>
                    Ready to watch? Enter your email to create or restart your membership.
                </OptForm.Content>
            </OptForm>
        </Feature>

    )
}