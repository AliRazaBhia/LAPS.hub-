import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkOutCart } from "../Redux/CartSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import CartCard from "./CartCard";
import { NavLink } from "react-router-dom";
import click from '../assets/click.png'

const Cart = () => {
  const cart = useSelector((state) => state.Cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      cart.reduce((acc, cur) => acc + cur.retail_price_cents * cur.qty, 0)
    );
  }, [cart]);

  const checkout = () => {
    toast.success("Checkout success");
    localStorage.removeItem("localCart")
    dispatch(checkOutCart());
    navigate("/");
  };

  return (
    <div className="text-white font-inter flex flex-row items-center justify-center overflow-x-hidden">
      <div className=" flex  px-3">
        <div className="">
          {cart.map((cartItem) => (
            <CartCard key={cartItem.id} item={cartItem} />
          ))}
        </div>

        {cart.length === 0 ? (
          <div className="font-bold flex flex-col gap-y-8 py-4 px-9">
              <div>
                <div className="text-3xl">
                   Your Cart Is Empty!
                </div>
              </div>

              <div>
                <div>
                  <NavLink to="/explore">
                  <button className="bg-yellow-500 flex justify-center items-center gap-x-4 py-1 px-8 rounded-sm transition-all text-yellow-900 text-2xl hover:bg-yellow-900 hover:text-yellow-500 ">Click Here To Shop 
                  </button>
                  </NavLink>
                </div>
              </div>
          </div> 
        ): (
          <div className=" mt-[10rem] px-2 flex flex-col gap-y-4 text-left font-bold text-4xl w-[50%] ">
            <div>
              <span>Total Items: {cart.length}</span>
            </div>
            <div>
              <span>Total Price: {total}</span>
            </div>
            <div>
              <button className="bg-red-900 mb-1 px-5 py-2 t rounded-md text-yellow-500 transition-all duration-200 hover:bg-yellow-500 hover:text-red-900" onClick={checkout}>
                CheckOut Cart
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Cart;
