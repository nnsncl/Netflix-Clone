import React, { useState, useContext, createContext } from 'react'
import ReactDOM from 'react-dom'

import { Container, Overlay, Inner, Button } from './styles/player'

export const PlayerContext = createContext()

export default function Player({ children, ...restProps }) {
    const [showPlayer, setShowPlayer] = useState(false)

    return (
        <PlayerContext.Provider value={{ showPlayer, setShowPlayer }} >
            <Container {...restProps} >
                {children}
            </Container>
        </PlayerContext.Provider>
    )
}

Player.Video = function PlayerVideo({ ...restProps }){
    const { showPlayer, setShowPlayer } = useContext(PlayerContext)

    return showPlayer
        // Source : https://fr.reactjs.org/docs/portals.html
        ? ReactDOM.createPortal(
            <Overlay onClick={() => setShowPlayer(false)}>
                <Inner>
                    <video id='video-player' controls >
                        <source src='/video/bunny.mp4'  type='video/mp4'/>
                    </video>
                </Inner>
            </Overlay>,
            // Inject what's in the portal as a first child of body
            document.body
        ) : null // If showPlayer = false then keep the original DOM tree
}


Player.Button = function PlayerButton({ ...restProps }){
    const { showPlayer, setShowPlayer } = useContext(PlayerContext)

    return <Button onClick={() => setShowPlayer(!showPlayer)}>Play</Button>
}