import React from "react";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Statistics from "./Statistics";
import Events from "./Events";
import "../../../css/home.css";

export default function HomePage() {
  return (
    <div className="homepage">
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Advertisement />
      <ActiveUsers />
      <Events />
    </div>
  );
}
