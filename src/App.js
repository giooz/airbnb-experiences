import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";
import "./style.css";

export default function App() {
  const cardElements = data.map((item) => {
    return (
      <Card
        key={item.id}
        item={item}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="card--area">
        {cardElements}
      </section>
    </div>
  );
}