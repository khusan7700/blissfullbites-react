import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import History from "./History";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setNewDishes, setPopularDishes, setTopUsers } from "./slice";
import { Product } from "../../../lib/types/product";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";
import "../../../css/home.css";
import { Member } from "../../../lib/types/member";
import MemberService from "../../services/MemberService";

/**  Redux slice & selector **/
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
  setNewDishes: (data: Product[]) => dispatch(setNewDishes(data)),
  setTopUsers: (data: Member[]) => dispatch(setTopUsers(data)),
});

export default function HomePage() {
  const { setPopularDishes, setNewDishes, setTopUsers } = actionDispatch(
    useDispatch()
  );

  useEffect(() => {
    //backend data fetch => data
    const product = new ProductService();
    product
      .getProducts({
        page: 1,
        limit: 4,
        order: "ProductViews",
        productCollection: ProductCollection.DISH,
      })
      .then((data) => {
        setPopularDishes(data);
      })
      .catch((err) => console.log(err));

    product
      .getProducts({
        page: 1,
        limit: 4,
        order: "createdAt",
        productCollection: ProductCollection.DISH,
      })
      .then((data) => {
        setNewDishes(data);
      })
      .catch((err) => console.log(err));

    const member = new MemberService();
    member
      .getTopUsers()
      .then((data) => {
        setTopUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="homepage">
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Advertisement />
      <History />
      <ActiveUsers />
      <Events />
    </div>
  );
}
