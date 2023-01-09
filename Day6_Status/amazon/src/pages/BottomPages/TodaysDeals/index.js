import React from "react";
// import '../../../scss/Header.scss'
import "./TodayDeals.scss";
import Header from "../../../Components/Header";

const TodaysDeals = () => {
  return (
     <>
     <Header/>
    <div className="deals">
      <figcaption>
        <img
          className="photo"
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="image1"
        />
        <div className="name">product1</div>
        <p className="title">title: Fjallraven</p>
      </figcaption>

      <figcaption>
        <img
          className="photo"
          src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
          alt="image2"
        />
        <div className="name">product2</div>
        <p className="title">Mens Casual Premium Slim Fit T-Shirts</p>
      </figcaption>
    </div>
    </>
  );
};

export default TodaysDeals;
