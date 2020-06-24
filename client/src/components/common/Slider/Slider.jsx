import React from "react";
import Slider from "react-slick";
import SliderItem from "./SliderItem/SliderItem";
import classes from "./Slider.module.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        marginTop: "-40px",
        backgroundColor: "#4A76A8",
        borderRadius: "20px",
      }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        marginTop: "-40px",
        backgroundColor: "#4A76A8",
        borderRadius: "20px",
      }}
      onClick={onClick}
    />
  );
}

export default class SimpleSlider extends React.Component {
  state = {
    items: [
      {
        id: 1,
        photoUrl:
          "https://games.mail.ru/hotbox/content_files/news/2020/02/03/8d6502db75dd46748b4440a5d5948579.jpg",
        likesCount: 0,
      },
      {
        id: 2,
        photoUrl:
          "https://images.hdqwalls.com/download/2020-warcraft-3-reforged-4k-so-3840x2160.jpg",
        likesCount: 0,
      },
      {
        id: 3,
        photoUrl:
          "https://leonardo.osnova.io/464be4aa-de3b-f8d2-a4bf-eb6d805f4326/",
        likesCount: 0,
      },
      {
        id: 4,
        photoUrl: "https://i.ytimg.com/vi/dj7iMmN7NPc/maxresdefault.jpg",
        likesCount: 0,
      },
      {
        id: 5,
        photoUrl:
          "https://static.goodgame.ru/files/uploaded/news_5dbe0c05074aa.jpg",
        likesCount: 0,
      },
      {
        id: 6,
        photoUrl:
          "https://c.wallhere.com/photos/f2/71/Warcraft_III_Reforged_Blizzard_Entertainment_Warcraft-1673637.jpg!d",
        likesCount: 0,
      },
    ],
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      customPaging: (i) => {
        return (
          <div className={classes.dotsImg}>
            <a href="123">
              <img src={this.state.items[i].photoUrl} alt="description" />
            </a>
          </div>
        );
      },
      dotsClass: classes.dots
    };
    return (
      <div className={classes.mainSlider}>
        <Slider {...settings}>
          {this.state.items.map((e) => (
            <SliderItem key={e.id} likes={e.likesCount} src={e.photoUrl} />
          ))}
        </Slider>
      </div>
    );
  }
}
