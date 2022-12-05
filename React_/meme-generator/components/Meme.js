import memesData from "../memesData";
import React from "react";
export default function Meme() {
  let [Url, setUrl] = React.useState("");

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    //url = memesArray[randomNumber].url;
    setUrl(memesArray[randomNumber].url);
  }
  return (
    <main>
      <div className="form">
        <input type="text" className="form-input" placeholder="top" />
        <input type="text" className="form-input" placeholder="bottom" />
        <button className="form-button" onclick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <img src={Url} className="meme-image" />
    </main>
  );
}
