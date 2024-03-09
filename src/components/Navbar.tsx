import img from "../assets/react.svg";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="flex items-center">
      <div className="flex items-center">
        <img src={img} className="w-15 h-15" alt="" />
        <h1 className="text-gray-500 text-2xl font-medium">News</h1>

      </div>
      <div className="flex items-center border border-spacing-1 p-3 rounded-lg shadow-md w-6/12 ">
      <IoSearchOutline />
        <input type="text" placeholder="search for news" className="ml-4 outline-none" />
      </div>
    </div>
  );
};

export default Navbar;
