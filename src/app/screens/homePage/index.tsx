import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import "../../../css/home.css";

export default function HomePage() {
  //selector: store => data

  useEffect(() => {
    //Backend server data request => data
    //slice: data => store
  }, []);

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
