import "./styles.css";
import React, { useState } from "react";

const games = {
  adventure: [
    { gameName: "last of us 1", gameRating: "10/10" },
    {
      gameName: "last of us 2",
      gameRating: "8/10"
    },
    {
      gameName: "marvel's spiderman (2018)",
      gameRating: "9/10"
    },
    {
      gameName: "Horizon Zero Dawn",
      gameRating: "10/10"
    }
  ],
  multiplayer: [
    { gameName: "Valorant", gameRating: "10/10" },
    {
      gameName: "Fortnite",
      gameRating: "8/10"
    },
    {
      gameName: "CS:GO",
      gameRating: "10/10"
    },
    {
      gameName: "Apex Legends",
      gameRating: "6/10"
    }
  ],
  sandbox: [
    { gameName: "minecraft", gameRating: "10/10" },
    {
      gameName: "Sim City",
      gameRating: "8/10"
    },
    {
      gameName: "City Skyline",
      gameRating: "7/10"
    },
    {
      gameName: "GMod",
      gameRating: "9/10"
    }
  ]
};
export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("adventure");
  var categories = Object.keys(games);
  function categoryClickHandler(category) {
    console.log(category);
    setSelectedCategory(category);
  }
  return (
    <div className="App">
      <h1> 🎮 Quality Games </h1>
      <p> Some of my top favorite games. </p>
      <ul>
        {categories.map((item, index) => {
          return (
            <button onClick={() => categoryClickHandler(item)} key={index}>
              {item}
            </button>
          );
        })}
      </ul>{" "}
      <hr />
      <h1>{selectedCategory}</h1>
      <ul>
        {games[selectedCategory].map((text, index) => {
          return (
            <li class={"list-item"} key={index}>
              {" "}
              <h3 class={"game-name"}>
                {text.gameName}{" "}
                <span class={"rating"}> {text.gameRating} </span>
              </h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
