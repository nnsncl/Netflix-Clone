import React from 'react'
import { ImageSection } from '../components'

export function ImageSectionContainer() {
    return (
        <>
            <ImageSection>
                <ImageSection.Content src='/images/misc/home-section.jpg' />
                <ImageSection.Frame>
                    <ImageSection.Text>
                    Netflix is a streaming service that offers a wide variety of award-winning TV programmes, films, anime, documentaries and more – on thousands of internet-connected devices.
                    </ImageSection.Text>
                </ImageSection.Frame>
            </ImageSection>
        </>
    )
}