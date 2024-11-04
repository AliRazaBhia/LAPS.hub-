import React from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { increaseQty, decreaseQty, removeFromCart } from "../Redux/CartSlice";

const CartCard = ({ item }) => {
  const dispatch = useDispatch();

  const remove = (itemIdx) => {
    dispatch(removeFromCart(itemIdx));
    toast.error("Removed From Cart");
  };

  const add = (id) => {
    dispatch(increaseQty(id));
  };

  const decrease = (id) => {
    if (item.qty === 1) {
      dispatch(removeFromCart(id));
    } else dispatch(decreaseQty(id));
  };

  return (
    <div className="bg-slate-800 rounded-xl flex flex-col mt-5 items-center justify-center w-[70%]">
      <div className="w-full ">
        <img    src={item.original_picture_url} width={200} height={200} alt="" />
      </div>

    <div className="flex flex-col gap-y-1">

      <div className="flex p-4" >
        <span className="text-left font-semibold text-yellow-500">
          {item.story_html
            ? item.story_html.split(" ").slice(0, 28).join(" ")+"..."
            : "it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a..."}
        </span>
      </div>

       

          <div className="flex  flex-row justify-evenly items-center py-3 px-5">

            
            <div className="">
              <span className="font-bold text-xl">
              {item.retail_price_cents
                ? item.retail_price_cents + " rs"
                : "Contact For Price"}{" "}
                </span>
            </div>
            <div className="flex flex-row justify-center items-center gap-x-4 text-xl font-bold">
                  <div>
                    <button className="bg-green-900 rounded-md py-1 px-2" onClick={() => add(item.id)}> + </button>
                  </div>
                  <div>{item.qty}</div>
                  <div>
                    <button className="bg-red-900 rounded-md py-1 px-2" onClick={() => decrease(item.id)}> - </button>
                  </div>
                  <div>
                    <button className="bg-red-900 rounded-md py-1 px-2 hover:bg-red-600 hover:text-red-400" onClick={() => remove(item.id)}> remove</button>
                  </div>
            </div>

          </div>
        </div>
      </div>
    
  );
};

export default CartCard;
