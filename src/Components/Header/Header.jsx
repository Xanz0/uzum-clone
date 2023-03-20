import React, { useContext } from "react";
import locationIcon from "../../assets/lacation_icon.png";
import uzb_icon from "../../assets/uzb_flag_icon.jpg";
import uzum_market from "../../assets/uzum_market.png";
import user_icon from "../../assets/user_icon.png";
import heart_icon from "../../assets/heart_icon.svg";
import bag_icon from "../../assets/bag_icon.svg";
import catalog_icon from "../../assets/catalog_icon.png";
import lupa_icon from "../../assets/lupa_icon.png";
import { useSelector } from "react-redux";
import { AuthContext } from "../contex/authContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { isLogin } = useContext(AuthContext);
  const { favoriteVideos } = useSelector((state) => state.favorite);
  
  

  return (
    <>
      <div className="bg-slate-100 mx-auto w-full"style={{width:1240}}>
        <div className="container mx-auto py-1 flex justify-between items-center w-full">
          <div className="flex items-center w-72">
            <img className="w-4 h-4 mr-2" src={locationIcon} alt="" />
            <p className="text-xs w-24 h-4">Shahar:<span className="underline">Toshkent</span></p>
            <h4 className=" ml-8 text-xs">Topshirish punktlari</h4>
          </div>
          <p className="text-xs w-96 h-4">Buyurtmangizni 1 kunda bepul yetkazib beramiz!</p>
          <div className="flex gap-8 items-center">
          <p className="text-xs  text-gray-500 hover:text-black">
              Uzumda soting
            </p>
            <p className="text-xs  text-gray-500 hover:text-black">
              Savol-javoblar
            </p>
            <p className="text-xs mr-4 text-gray-500 hover:text-black">Buyurtmalarim</p>
            <span className="flex">
              <img className="w-6 h-6" src={uzb_icon} alt="" />
              <p>O'zbekcha</p>
            </span>
          </div>
        </div>
      </div>
      <div className="flex container mx-auto px-36 items-center justify-between p-5">
        <img className="w-56 " src={uzum_market} alt="uzum.uz" />
        <div className="flex ">
          <span className="bg-violet-200 flex rounded-md p-2 text-violet-800 w-32 h-10 justify-center ml-">
            <img className="mr-2" src={catalog_icon} alt="" />
            Katalog
          </span>
          <div className="flex">
            <input
              className="w-96 border rounded-l-lg ml-2 p-2 "
              type="text"
              placeholder="Mahsulotlar va turkumlar izlash"
            />
            <span className="py-3 px-7 border rounded-r-lg w-22">
              <img className="w-5 h-5 " src={lupa_icon} alt="" />
            </span>
          </div>
        </div>
        <div className="btns flex">
          {isLogin ? (
            <Link
              to={"/login"}
              className="ml-2 flex items-center hover:bg-gray-200 rounded-md p-2 text-black "
            >
              <img className="w-7 h-7 mr-2 " src={user_icon} alt="" />
              Chiqish
            </Link>
          ) : (
            <Link
              to={"/user"}
              className="ml-2 flex items-center hover:bg-gray-200 rounded-md p-2 text-black "
            >
              <img className="w-7 h-7 mr-2 " src={user_icon} alt="" />
              Kirish
            </Link>
          )}
          <Link
            to={"/likes"}
            className="ml-2 flex items-center hover:bg-gray-200 rounded-md p-2 text-black "
          >
            <img className="w-5 h-5 mr-2" src={heart_icon} alt="" />
            Saralangan
            <p className="text-white  bg-purple-600 w-5 h-5 text-center">{favoriteVideos.length} </p>
            
          </Link>
          <span className="ml-2 flex items-center hover:bg-gray-200 rounded-md p-2 text-black ">
            <img className="w-6 h-6 mr-2" src={bag_icon} alt="" />
            Savat
          </span>
        </div>
      </div>

      <ul className="flex container mx-auto px-36 items-center gap-4">
        <li className="text-gray-400 cursor-pointer hover:text-black hover:border-b-[2px] ">
          Elektronika
        </li>
        <li className="text-gray-400 cursor-pointer hover:text-black hover:border-b-[2px] ">
          Maishiy texnika
        </li>
        <li className="text-gray-400 cursor-pointer hover:text-black hover:border-b-[2px] ">
          Kiyim
        </li>
        <li className="text-gray-400 cursor-pointer hover:text-black hover:border-b-[2px] ">
          Payabzallar
        </li>
        <li className="text-gray-400 cursor-pointer hover:text-black hover:border-b-[2px] ">
          Aksessuarlar
        </li>
        <li className="text-gray-400 cursor-pointer hover:text-black hover:border-b-[2px] ">
          Go'zallik
        </li>
        <li className="text-gray-400 cursor-pointer hover:text-black hover:border-b-[2px] ">
          Salomatlik
        </li>
        <li className="text-gray-400 cursor-pointer hover:text-black hover:border-b-[2px] ">
          Uy-ro'zg'or buyumlari
        </li>
        <li className="text-gray-400 cursor-pointer hover:text-black hover:border-b-[2px] ">
          Qurilish va ta'mirlash
        </li>
        <li className="text-gray-400 cursor-pointer hover:text-black hover:border-b-[2px] ">
          Avtotovarlar
        </li>
        <li className="text-gray-400 cursor-pointer hover:text-black hover:border-b-[2px] ">
          Bolalar tovarlari
        </li>
        <li className="text-gray-400 cursor-pointer hover:text-black hover:border-b-[2px] ">
          Yana&darr;
        </li>
      </ul>
    </>
  );
};

export default Header;
