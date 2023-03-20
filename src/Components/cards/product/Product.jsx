import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import heart_icon from "../../../assets/heart_icon.svg";
import { add, remove } from "../../../store/slicers/favoriteSlice";

const Product = ({ name, price, description, category, image, rating, id,response }) => {
  const dispatch = useDispatch();

  const { favoriteVideos } = useSelector((state) => state.favorite);
  console.log(favoriteVideos);
  const updateLikeHandler = (video) => {
    let hasVideo = false;
    favoriteVideos.forEach((element) => {
      if (element.id === video.id) {
        hasVideo = true;
      }
    });
    if (hasVideo) {
      dispatch(remove(video));
    } else {
      dispatch(add(video));
    }
  };

  return (
    <div className="card w-56 hover:shadow-xl hover:scale-105 hover:rounded-md 	">
      <span className="flex relative">
        <Link key={id} to={"/single/" + id}>
          <div className="imagee  rounded-t-lg flex justify-center items-center w-full h-full bg-slate-300">
          <img className="rounded-md w-4/6 h-3/6 m-0 hover:scale-110 transition-all duration-400 cursor-pointer" src={image}/>
          <img
          onClick={() => (updateLikeHandler(response)
  )}
          className="w-5 h-5 absolute left-48 top-3 z-15"
          src={heart_icon}
          alt=""
        />
          </div>
        </Link>

        
      </span>
      <Link key={id} to={"/single/" + id}>
        <div className="info p-3">
          <p className="name font-bold">{name}</p>
          <p className="rating text-gray-400">{category}</p>
          <p className="rating text-black">
            ⭐️{rating}  ({rating*560}baho)
          </p>
          <p className="credit rounded-md p-1" style={{backgroundColor:"yellow"}}>
            {price/100}0 so'm/oyiga
          </p>
          <div className="bottomm flex justify-between mt-4">
          <div className="btm-left">
          <p className="text-gray-500 price font-medium line-through ">{price}0 so'm</p>
          <p className="price font-medium">{price/10}00so'm</p>
          </div>
          <svg data-v-07972e08="" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" class="ui-icon  add-cart-icon" >
<path d="M8 10V8H6V12.5C6 12.7761 5.77614 13 5.5 13C5.22386 13 5 12.7761 5 12.5V7H8C8 4.59628 9.95227 3 12 3C14.0575 3 16 4.70556 16 7H19V19.5C19 20.3284 18.3284 21 17.5 21H12.5C12.2239 21 12 20.7761 12 20.5C12 20.2239 12.2239 20 12.5 20H17.5C17.7761 20 18 19.7761 18 19.5V8H16V10H15V8H9V10H8ZM12 4C10.4477 4 9 5.20372 9 7H15C15 5.29444 13.5425 4 12 4Z" fill="black"></path>
<path d="M7.5 14C7.77614 14 8 14.2239 8 14.5V17H10.5C10.7761 17 11 17.2239 11 17.5C11 17.7761 10.7761 18 10.5 18H8V20.5C8 20.7761 7.77614 21 7.5 21C7.22386 21 7 20.7761 7 20.5V18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H7V14.5C7 14.2239 7.22386 14 7.5 14Z" fill="black"></path>
</svg>
          </div>
          
        </div>
      </Link>
    </div>
  );
};
export default Product;
