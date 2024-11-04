import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../Redux/CartSlice";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";
const Card = ({ shoe }) => {
  let cart = useSelector((state) => state.Cart);
  const img = shoe.original_picture_url;
  const price = shoe.retail_price_cents;
  const descri = shoe.story_html;
  const id = shoe.id;

  const dispatch = useDispatch();
  const add = () => {
    dispatch(addToCart(shoe));
    toast.success("added to cart");
  };

  const remove = (itemidx) => {
    dispatch(removeFromCart(itemidx));
    toast.error("removed from cart");
  };

  return (
    <div className="bg-yellow-500 rounded-2xl px-5 py-5 flex flex-col justify-center content-center font-inter hover:bg-yellow-600">
      <div className=" flex justify-end ">
      <NavLink to={`/preview/${id}`}>
        <button className="text-white font-medium  bg-black px-2 animate-pulse-ani rounded">preview</button>
      </NavLink>
      </div>
      
      <div className="">
        <img className="mx-auto my-auto"src={img} width={300} height={300} alt="shoes images" />
      </div>

  

      <div id="card_desc">
        <p className="text-left leading-tight mb-3 text-lg font-medium">
          {descri
            ? descri.split(" ").slice(0, 15).join(" ") + "..."
            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore"}
        </p>
      </div>

      <div className="flex flex-row items-center justify-between">
        <div className="">
          {cart.some((item) => item.id === shoe.id) ? (
            <button className="bg-red-800 text-white px-4 py-2 rounded font-bold" onClick={() => remove(shoe.id)}>Remove Item</button>
          ) : (
            <button className="bg-gray-800 text-white px-4 py-2 rounded font-bold" onClick={add}>Add To Cart</button>
          )}
        </div>

        <div id="card_price">
          <span className={price? "text-white font-bold text-xl" : "text-red-600 font-bold text-l"}>{price ? price+" rs" : "Contact For Price" }</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
