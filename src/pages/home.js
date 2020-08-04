import React from 'react'
import { JumbotronContainer } from '../containers/jumbotron'
import { FaqsContainer } from '../containers/faqs'
import { FooterContainer } from '../containers/footer'
import { HeaderContainer } from '../containers/header'
import { FeatureContainer } from '../containers/feature'
import { ImageSectionContainer } from '../containers/image-section'



export default function Home() {
    return (
        <>
            <HeaderContainer background={false} >
                <FeatureContainer />
            </HeaderContainer>
            <ImageSectionContainer />
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}