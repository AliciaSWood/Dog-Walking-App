import React from "react";
import TinderCard from "react-tinder-card";
import { useState } from "react";
import ChatContainer from "./ChatContainer"

const Dashboard = () => {
  const db = [
    {
      name: "Richard Hendricks",
      url: "https://i.imgur.com/Gg6BpGn.jpeg",
    },
    {
      name: "Erlich Bachman",
      url: "https://i.imgur.com/Lnt9K7l.jpeg",
    },
    {
      name: "Monica Hall",
      url: "https://i.imgur.com/OckVkRo.jpeg",
    },
    {
      name: "Jared Dunn",
      url: "https://i.imgur.com/Q9WPlWA.jpeg",
    },
    {
      name: "Dinesh Chugtai",
      url: "https://i.imgur.com/dmwjVjG.jpeg",
    },
  ];
  const characters = db;
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };
  return (
    <div className="dashboard">
        <ChatContainer/>
              <div className = "swipe-info">
{lastDirection ? <p>You swiped {lastDirection}</p> : <p></p>}
        </div>
      <div className="swiper-container">
        <div className="card-container">
          {characters.map((character) => (
            <TinderCard
              className="swipe"
              key={character.name}
              onSwipe={(dir) => swiped(dir, character.name)}
              onCardLeftScreen={() => outOfFrame(character.name)}
            >
              <div
                style={{ backgroundImage: "url(" + character.url + ")" }}
                className="card"
              >
                <h3>{character.name}</h3>
              </div>
            </TinderCard>
          ))}

        </div>
        
      </div>

    </div>
  );
};

export default Dashboard;
