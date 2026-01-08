import React from "react";
import InfiniteMenu from "./InfiniteMenu";

function TestingPage() {
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

  return (
    <div style={{ height: "500px", position: "relative" }}>
      <InfiniteMenu items={items} scale={2} />
    </div>
  );
}

export default TestingPage;
