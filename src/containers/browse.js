import React, { useState, useEffect, useContext } from 'react'
import Fuse from 'fuse.js'
import { Card, Header, Loading } from '../components'
import * as ROUTES from '../constants/routes'
import { FirebaseContext } from '../context/firebase'
import { ProfileContainer } from './profile'
import { FooterContainer } from './footer'

export function BrowseContainer({ slides }) {
    const [profile, setProfile] = useState({});
    const [category, setCategory] = useState('films')
    const [searchValue, setSearchValue] = useState('')
    const [loading, setLoading] = useState(true)
    const [slideRows, setSlideRows] = useState([])

    const { firebase } = useContext(FirebaseContext)

    const user = {
        displayName: "Niki",
        pictureURL: "1"
    };

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [user])

    useEffect(() => {
        setSlideRows(slides[category])
    }, [slides, category])

    useEffect(() => {
        const fuse = new Fuse(slideRows, { keys: ['data.description', 'data.title', 'data.genre'] });
        console.log(fuse) 
        const results = fuse.search(searchValue).map(({ item }) => item);
       console.log(results) 
        if (slideRows.length > 0 && searchValue.length > 0) {
            setSlideRows(results);
        } else {
            setSlideRows(slides[category]);
        }
        // eslint-disable-next-line
      }, [searchValue])

    return profile.displayName ? (
        <>
            {loading ? <Loading src={user.pictureURL} /> : <Loading.ReleaseBody />}
            <Header src="dorohedoro">
                <Header.Frame>
                    <Header.Group>
                        <Header.Logotype
                            to={ROUTES.HOME}
                            src="/images/misc/logo.svg"
                            alt='Logotype Netflix'
                        />
                           <Header.Link
                            active={category === 'films' ? 'true' : 'false'}
                            onClick={() => setCategory('films')}
                        >
                            Films
                        </Header.Link>
                        <Header.Link
                            active={category === 'series' ? 'true' : 'false'}
                            onClick={() => setCategory('series')}
                        >
                            Series
                        </Header.Link>
                    </Header.Group>
                    <Header.Group>
                        <Header.Search
                            searchValue={searchValue}
                            setSearchValue={setSearchValue}
                        />

                        <Header.Profile>
                            <Header.Picture src={user.pictureURL} />
                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Picture src={user.pictureURL} />
                                    <Header.Link>{user.displayName}</Header.Link>
                                </Header.Group>
                                <Header.Group>
                                    <Header.Link onClick={() => firebase.auth().signOut()} >
                                        Sign Out
                                    </Header.Link>
                                </Header.Group>
                            </Header.Dropdown>
                        </Header.Profile>

                    </Header.Group>
                </Header.Frame>
                <Header.Feature>
                    <Header.LogoTitle src='/images/misc/dorohedoro_logo.png' alt='dorohedoro' />
                    {/* <Header.Title>Dorohedoro</Header.Title> */}
                    <Header.Content>Sorcerers regularly visit the Hole in order to practice their magic on human victims, leading to huge numbers of disfigured survivors.</Header.Content>
                    <Header.Button>Watch now</Header.Button>
                </Header.Feature>

            </Header>

            <Card.Group>
                {slideRows.map((slideItem) => (
                    <Card key={`${category}-${slideItem.title.toLowerCase()}`} >
                        <Card.Title>{slideItem.title}</Card.Title>
                        {/* <Card.Title>{slideItem.title.substring(0, slideItem.title.length - 1)}</Card.Title> */}
                        <Card.Entities >
                            {slideItem.data.map((item) => (
                                <Card.Item key={item.docId} item={item} >
                                    <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                                    <Card.Meta>
                                        <Card.SubTitle>{item.title}</Card.SubTitle>
                                        <Card.Text>{`${item.maturity } +`}</Card.Text>
                                    </Card.Meta>
                                </Card.Item>
                            ))}
                        </Card.Entities>
                        <Card.Feature category={category} />
                    </Card>
                ))}
            </Card.Group>

            <FooterContainer />
        </>
    ) : (<ProfileContainer user={user} setProfile={setProfile} />)
}