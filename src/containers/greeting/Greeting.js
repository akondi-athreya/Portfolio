import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import InfiniteMenu from "./InfiniteMenu";

export default function Greeting(props) {
  const items = [
    {
      image: "/images/pfps/picofme.png",
      link: "https://google.com/",
      title: "Athreya",
      description: "This is pretty cool, right?",
    },
    {
      image: "/images/pfps/picofme (1).png",
      link: "https://google.com/",
      title: "Athreya",
      description: "This is pretty cool, right?",
    },
    {
      image: "/images/pfps/picofme (2).png",
      link: "https://google.com/",
      title: "Athreya",
      description: "This is pretty cool, right?",
    },
    {
      image: "/images/pfps/picofme (3).png",
      link: "https://google.com/",
      title: "Athreya",
      description: "This is pretty cool, right?",
    },
    {
      image: "/images/pfps/picofme (4).png",
      link: "https://google.com/",
      title: "Athreya",
      description: "This is pretty cool, right?",
    },
    {
      image: "/images/pfps/picofme (5).png",
      link: "https://google.com/",
      title: "Athreya",
      description: "This is pretty cool, right?",
    },
    {
      image: "/images/pfps/picofme (6).png",
      link: "https://google.com/",
      title: "Athreya",
      description: "This is pretty cool, right?",
    },
    {
      image: "/images/pfps/picofme (7).png",
      link: "https://google.com/",
      title: "Athreya",
      description: "This is pretty cool, right?",
    },
    {
      image: "/images/pfps/picofme (8).png",
      link: "https://google.com/",
      title: "Athreya",
      description: "This is pretty cool, right?",
    },
    {
      image: "/images/pfps/picofme (9).png",
      link: "https://google.com/",
      title: "Athreya",
      description: "This is pretty cool, right?",
    },
    {
      image: "/images/pfps/picofme (10).png",
      link: "https://google.com/",
      title: "Athreya",
      description: "This is pretty cool, right?",
    },
    {
      image: "/images/pfps/picofme (11).png",
      link: "https://google.com/",
      title: "Athreya",
      description: "This is pretty cool, right?",
    },
    {
      image: "/images/pfps/picofme (12).png",
      link: "https://google.com/",
      title: "Athreya",
      description: "This is pretty cool, right?",
    },
    {
      image: "/images/pfps/picofme (13).png",
      link: "https://google.com/",
      title: "Athreya",
      description: "This is pretty cool, right?",
    },
  ];
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              {/* {greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  ( {greeting.nickname} )
                </h2>
              )} */}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
              <div className="portfolio-repo-btn-div">
                <Button
                  text="⭐ CV / Resume ⭐"
                  newTab={true}
                  href={greeting.resumeLink}
                  theme={theme}
                  className="portfolio-repo-btn"
                />
              </div>
              {/* <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div> */}
            </div>
          </div>
          <div className="greeting-image-div">
            {/* <img
              alt="saad sitting on table"
              src={require("../../assets/images/landing image logo.png")}
            ></img> */}
            <div className="infinite-menu-wrapper">
              <InfiniteMenu items={items} scale={2} />
            </div>
            {/* <FeelingProud theme={theme} /> */}
          </div>
        </div>
      </div>
    </Fade>
  );
}
