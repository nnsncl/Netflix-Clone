import React, { useState } from 'react'
import { Header } from '../components'
import * as ROUTES from '../constants/routes'
import { FirebaseContext } from '../context/firebase'
import { ProfileContainer } from './profile'
import { FooterContainer } from './footer'

export function BrowseContainer() {
    const [profile, setProfile] = useState({});

    const user = {
        displayName: "Niki",
        photoURL: "1"
    };

    return profile.displayName ? (
        <>
            <p>Browse page</p>
            <FooterContainer />
        </>
    ) : (<ProfileContainer />)
}