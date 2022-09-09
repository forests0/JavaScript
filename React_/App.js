import "./styles.css";
import Navbar from "./components/Navbar";
import react from "react";
import reactDom from "react-dom";
import Content from "./components/Content";
import Card from "./components/Card";
import Data from "./data.js";
export default function App() {
  const cards = Data.map((item) => {
    return (
      <Card
        img={item.coverImg}
        rating={item.stats.rating}
        reviewpoint={item.stats.reviewCount}
        location={item.location}
        country={item.country}
        title={item.title}
        price={item.price}
        openspots={item.openSpots}
      />
    );
  });
  return (
    <div className="App">
      <Navbar />
      <Content />
      <section className="cards--list">{cards}</section>
    </div>
  );
}
