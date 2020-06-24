import React from "react";

const EmojiItem = (props) => {
  return (
        <li onClick={() => console.log(props.emoji)}>{props.emoji}</li>
  );
};

export default EmojiItem
