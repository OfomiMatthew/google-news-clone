import { signInWithPopup } from "firebase/auth";
import img from "../assets/google.jpg";
import { IoSearchOutline } from "react-icons/io5";
import { auth,googleProvider } from "../firebase/setup";

const Navbar = () => {
  const googleSignin =async ()=>{
    try{
      await signInWithPopup(auth,googleProvider)
    }catch(e){
      console.log(e)
    }
    
  }
  return (
    <div className="flex items-center justify-evenly">
      <div className="flex items-center">
        <img src={img} className=" h-20" alt="" />
        <h1 className="text-gray-500 text-2xl font-medium">News</h1>

      </div>
      <div className="ml-32 flex items-center border border-spacing-1 p-2 rounded-lg shadow-md w-6/12 mt-3 ">
      <IoSearchOutline />
        <input type="text" placeholder="search for news" className="ml-4 outline-none w-full p-2 rounded-full" />
      </div>
      <button onClick={googleSignin} className="bg-blue-500 text-white p-2 w-25 rounded-md ml-44">Sign In</button>
    </div>
  );
};

export default Navbar;
