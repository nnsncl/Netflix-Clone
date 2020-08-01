import React from 'react'
import { Header, Profile } from '../components'
import * as ROUTES from '../constants/routes'

export function ProfileContainer({ user, setProfile }) {
    return (
        <>
            <Header background={false} >
                <Header.Frame>
                    <Header.Logotype
                        to={ROUTES.HOME}
                        src="/images/misc/logo.svg"
                        alt='Logotype Netflix'
                    />
                </Header.Frame>
            </Header>
            <Profile>
                <Profile.Title>Who's watching?</Profile.Title>
                <Profile.List>
                <Profile.User
                        onClick={() => setProfile({
                            displayName: user.displayName,
                            photoURL: user.photoURL
                        })}
                    >
                    <Profile.Picture src={user.pictureURL} />
                    <Profile.UserName>{user.displayName}</Profile.UserName>
                    </Profile.User>
                </Profile.List>
            </Profile>
        </>
    )
}