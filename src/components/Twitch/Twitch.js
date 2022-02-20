import React from "react"
import ReactPlayer from "react-player"
import './Twitch.css'
import { FaTwitch } from "react-icons/fa";

function App() {
  return (
    <div className="twitchDiv">
      <h1 className="display-5 text-center twitchHeading">Watch us LIVE! <FaTwitch/> </h1>
      <ReactPlayer
        url="https://www.twitch.tv/thornbushrc"
        controls='true'
        muted='true'
      />
      </div>

  )
}

export default App