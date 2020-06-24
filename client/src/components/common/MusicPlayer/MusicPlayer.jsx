import React from "react";
import track_1 from "../../../assets/music/pendulum-crush-(megapesni.com).mp3";
import track_2 from "../../../assets/music/Pendulum_-_The_Island_Pt._I_(Dawn)-(megapesni.com).mp3";
import track_3 from "../../../assets/music/Pendulum_and_Liam_Howlett_-_Immunize-(megapesni.com).mp3";
import AudioPlayer from "react-modular-audio-player";
import "./MusicPlayer.css";

class MusicPlayer extends React.Component {
  state = {
    tracklist: [
      {
        src: track_1,
        title: "Crush",
        artist: "Pendulum",
        icon:
          "https://img1.goodfon.ru/original/1920x1536/5/10/pendulum-crush-faces-hands.jpg",
      },
      {
        src: track_2,
        title: "The Island Pt. I (Dawn)",
        artist: "Pendulum",
        icon:
          "https://lastfm.freetls.fastly.net/i/u/ar0/3dc463dbeb05e874bc90516d7c343f8b.jpg",
      },
      {
        src: track_3,
        title: "Immunize",
        artist: "Pendulum and Liam Howlett",
        icon:
          "https://img2.goodfon.ru/original/2500x2000/9/e6/pendulum-immersion-dnb-dram.jpg",
      },
    ],
  };

  rearrangedPlayer = [
    {
      className: "1",
      innerComponents: [
        {
          type: "play",
          style: {
            
          },
        },
        {
            type: "rewind"
        },
        {
            type: "forward"
        },
        {
            type: "loop"
        },
        {
            type: "name"
        },
        {
            type: "time"
        },
        {
            type: "seek"
        },
        {
            type: "volume"
        },
        
      ],
    },
  ];

  render() {
    return (
      <div>
        <AudioPlayer
          audioFiles={this.state.tracklist}
          playerWidth="1010px"
          fontSize="1.5rem"
          iconSize="3.5rem"
        //   rearrange={this.rearrangedPlayer}
        //     playIcon={this.state.tracklist[0].icon}
        //    playHoverIcon={this.state.tracklist[0].icon}
          //   pauseIcon={this.state.tracklist[0].icon}
          //   pauseHoverIcon={this.state.tracklist[0].icon}
        />
      </div>
    );
  }
}

export default MusicPlayer;
