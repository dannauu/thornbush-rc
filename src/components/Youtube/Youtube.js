import React from 'react';
import ReactPlayer from 'react-player'
import './Youtube.css'


const Youtube = () => {
    return (
        <div className='youtubeDiv container'>
        <h1 className='youtubeHeader'>Check out ThornbushRC Youtube for VODs of past events and competitions!</h1>
            <ReactPlayer
                url="https://www.youtube.com/watch?v=Bv_jXq2mE4k&ab_channel=ThornbushRC"
                controls='true'
                muted='true'
                className='youtubePlayer'
                width={1100}
            />
        </div>
    )
};

export default Youtube;
