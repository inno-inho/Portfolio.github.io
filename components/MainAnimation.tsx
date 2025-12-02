import Lottie from 'react-lottie-player'
import CodingBoy from '@src/animation/coding-boy.json'
import React from 'react'

export default function MainAnimation(): JSX.Element {
    return (
        <React.Fragment>
            <Lottie
                loop
                animationData={CodingBoy}
                play
                style={{ width: `100%`, height: `100%` }}
            />
        </React.Fragment>
    )
}