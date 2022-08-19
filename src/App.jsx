import Container from "react-bootstrap/Container";

import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      playMusic(e.key.toUpperCase());
    });
  }, []);

  const sounds = [
    {
      id: "Q",
      name: "Heater-1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      id: "W",
      name: "Heater-2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      id: "E",
      name: "Heater-3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      id: "A",
      name: "Heater-4",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4.mp3",
    },
    {
      id: "S",
      name: "Clap",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      id: "D",
      name: "Open-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      id: "Z",
      name: "Kick-n'-Hat",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      id: "X",
      name: "Kick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      id: "C",
      name: "Closed-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  function playMusic(selector) {
    const audio = document.getElementById(selector);
    audio.play();
    setName(selector);
  }

  return (
    <Container fluid>
      <div id="drum-machine">
        <div className="drum-display">
          <div className="pad">
            {sounds.map((drumMachine) => (
              <div
                key={drumMachine.url}
                onClick={() => {
                  playMusic(drumMachine.id);
                }}
                className="drum-pad"
                id={drumMachine.name}
              >
                {drumMachine.id}
                <audio
                  className="clip"
                  id={drumMachine.id}
                  src={drumMachine.url}
                ></audio>
              </div>
            ))}
          </div>
          <div className="logo">
            <div className="inner-logo">DooDoo&nbsp;</div>
            <i class="fa-solid fa-drum"></i>
          </div>
          <div className="display-name">
            <div id="display">{name}</div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default App;
