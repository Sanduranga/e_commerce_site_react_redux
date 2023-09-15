import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dropCart, totalCartPriceMinus } from "../redux/items/itemActions";

function ShoppingCart() {
  const dispatch = useDispatch();

  const cartList = useSelector((state) => state.items.cartList);

  const cartListMapping = cartList.map((list, index) => {
    const listRow = `${list.id} - ${list.name}    = ${list.price}`;
    return (
      <div
        key={index}
        className="flex justify-center items-center bg-gradient-to-br mb-2 from-blue-700 to-blue-300 rounded-lg w-[35vw] h-[10vh]"
      >
        <img
          className="mr-3 w-[6vw] h-[6vh] rounded-md"
          src={list.image}
          alt="img"
        ></img>
        {listRow}
        <button
          className="mx-4"
          onClick={() => {
            dispatch(totalCartPriceMinus(list.price));

            const newCart = [...cartList];
            newCart.splice(index, 1);
            dispatch(dropCart(newCart));
          }}
        >
          ❎
        </button>
      </div>
    );
  });

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="my-10 ">
        <h1 className="font-mono font-bold text-4xl">Your cart list ..</h1>
      </div>
      {cartListMapping}
    </div>
  );
}

export default ShoppingCart;
