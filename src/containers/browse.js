import React, { useState, useContext } from 'react'
import { Header } from '../components'
import * as ROUTES from '../constants/routes'
import { FirebaseContext } from '../context/firebase'
import { ProfileContainer } from './profile'
import { FooterContainer } from './footer'

export function BrowseContainer() {
    const [profile, setProfile] = useState({});
    const [category, setCategorie] = useState('series')
    const [searchValue, setSearchValue] = useState('')
    const [loading, setLoading] = useState(true)

    const { firebase } = useContext(FirebaseContext)

    const user = {
        displayName: "Niki",
        pictureURL: "1"
    };

    return profile.displayName ? (
        <>
            <Header src="dorohedoro" dontShowOnSmallViewPort >
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
                    <Header.Group>
                        <Header.Search
                            searchValue={searchValue}
                            setSearchValue={setSearchValue}
                            placeholder='Search...'
                        />
                    </Header.Group>
                </Header.Frame>
                <Header.Feature>
                    <Header.LogoTitle src='/images/misc/dorohedoro_logo.png' alt='dorohedoro' />
                    {/* <Header.Title>Dorohedoro</Header.Title> */}
                    <Header.Content>Sorcerers regularly visit the Hole in order to practice their magic on human victims, leading to huge numbers of disfigured survivors. Hospitals have been set up to deal with the ever-growing numbers of magic victims, but humans can do little to repel sorcerers.</Header.Content>
                    <Header.Button>Watch now</Header.Button>
                </Header.Feature>

            </Header>
            <FooterContainer />
        </>
    ) : (<ProfileContainer user={user} setProfile={setProfile} />)
}