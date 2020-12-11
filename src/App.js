import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🤡": "clown",
  "😢": "crying",
  "❤️": "lovee",
  "🙄": "uwuwuwu",
  "😕": "sad",
  "💔": "broken heart"
};

var emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("your meaning is");

  function changeHandler(event) {
    var inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("undefined");
    }
  }

  function onClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    <div className="App">
      <h1>
        <em>Emoji Interpreter</em>
      </h1>

      <input
        onChange={changeHandler}
        style={{
          padding: "1em",
          width: "80%"
        }}
      ></input>
      <h2>{emoji}</h2>
      <h2>{meaning}</h2>

      {emojis.map((emoji) => (
        <span
          onClick={() => onClickHandler(emoji)}
          style={{ cursor: "pointer", fontSize: "2rem", padding: "0.5rem" }}
        >
          {""}
          {emoji}
          {""}
        </span>
      ))}
    </div>
  );
}
