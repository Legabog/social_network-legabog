import React from "react";
import EmojiItem from "./EmojiItem";

class Emoji extends React.Component {
  state = {
    emojilist: [
      0x1f601,
      0x1f607,
      0x1f608,
      0x1f60E,
      0x1f611,
      0x1f634,
      0x1f602,
      0x1f609,
      0x1f60D,
      0x1f60F,
      0x1f616,
      0x1f61C,
      0x1f61D,
      0x1f61E,
      0x1f620,
      0x1f621,
      0x1f624,
      0x1f628,
      0x1f631,
      0x1f633,
      0x1f635,
      0x1f637,
      0x1f638,
      0x1f648,
      0x1f649,
      0x1f64F,
      0x1f300,
      0x1f308,
      0x1f30C,
      0x1f30F,
      0x1f375,
      0x1f37B,
      0x1f4a9,
      0x1f4aa,
      0x1f525,
    ],
  };

  render() {
    return (
      <div style={{fontSize:"2rem"}}>
        <ul>
          {this.state.emojilist.map((e) => {
            return <EmojiItem {...this.props} key={Math.random()} emoji={String.fromCodePoint(e)} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Emoji;
