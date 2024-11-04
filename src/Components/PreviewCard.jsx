import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/CartSlice";
import toast from "react-hot-toast";

const PreviewCard = ({ shoe }) => {
  const cart = useSelector((state) => state.Cart);
  const dispatch = useDispatch();

  const add = () => {
    const shoeInCart = cart.some((item) => item.id === shoe.id);
    if (shoeInCart) {
        toast.error("The item is already in your cart");
      } else {
        dispatch(addToCart(shoe));
        toast.success("Item added to cart");
      }
  };
  

  const img = shoe.original_picture_url;
  const price = shoe.retail_price_cents.toLocaleString();
  const desc = shoe.story_html;
  const name = shoe.name;
  const brand = shoe.brand_name;
  const gender = shoe.gender[0];

  return(
    <div className="main_preview">
        <section className="left">
            <div>
                <img className="cursor-pointer hover:rotate-2 hover:translate-y-[-10px] transition-all duration-300" src={img} width={500} height={500} alt="" />
            </div> 

            <div className="sizes_main_div">
            <span className="size_head">Choose Size</span>
            <div id="choose_size">
                <a className="allSizes" href="#"> 5 </a>
                <a className="allSizes" href="#"> 6</a>
                <a className="allSizes" href="#"> 7 </a>
                <a className="allSizes" href="#"> 8 </a>
                <a className="allSizes" href="#"> 9 </a>
                <a className="allSizes" href="#"> 10 </a>

            </div>
            </div> 
        </section>
        <section className="right">
            <div className="brand_name_etc">
                <span>{brand}</span>
                <div><span>{name}</span></div>
                <div><span className={price ? "text-whites" : "text-red-700"}>{price ? "Price: " + price + " rs" : "Contact For Price"}</span></div>
            </div>
            <div className="main_desc">
                <span className="description text-yellow-400">
                    {desc ? desc : "it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."}
                </span>
            </div>
            <div className="button_card">
                <button className="add_to_cart"onClick={add}>Add To Cart</button>
            </div>
        </section>
        
    </div>
  )
};

export default PreviewCard;
