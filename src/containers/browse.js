import React, { useState, useContext } from 'react'
import { Header } from '../components'
import * as ROUTES from '../constants/routes'
import { FirebaseContext } from '../context/firebase'
import { ProfileContainer } from './profile'
import { FooterContainer } from './footer'

export function BrowseContainer() {
    const [profile, setProfile] = useState({});
    const [category, setCategorie] = useState('series')
    const [loading, setLoading] = useState(true)

    const { firebase } = useContext(FirebaseContext)

    const user = {
        displayName: "Niki",
        pictureURL: "1"
    };

    return profile.displayName ? (
        <>
            <Header src="joker1" dontShowOnSmallViewPort >
                <Header.Frame>
                    <Header.Group>
                        <Header.Logotype
                            to={ROUTES.HOME}
                            src="/images/misc/logo.svg"
                            alt='Logotype Netflix'
                        />
                        <Header.Link
                            active={category === 'series' ? 'true' : 'false'}
                            onClick={() => setCategorie('series')}
                        >
                            Series
                        </Header.Link>
                        <Header.Link
                            active={category === 'films' ? 'true' : 'false'}
                            onClick={() => setCategorie('films')}
                        >
                            Films
                        </Header.Link>
                    </Header.Group>
                </Header.Frame>
            </Header>
            <FooterContainer />
        </>
    ) : (<ProfileContainer user={user} setProfile={setProfile} />)
}