import Lottie from 'react-lottie-player'
import animationData from '@src/animation/404.json'
import React from 'react';

export default function Animation(): JSX.Element {
    return (
        <React.Fragment>
            <Lottie
                loop
                animationData={animationData}
                play
                style={{ width: `100%`, height: `100%` }}
            />
        </React.Fragment>
    )
}