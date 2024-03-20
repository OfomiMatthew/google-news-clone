import { useEffect } from "react";
import Menubar from "./Menubar";
import Navbar from "./Navbar";

const Main = () => {
  async function getNews() {
    try {
      fetch(
        `https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=987a63c01f5d42aabf479c02d492c0a9`
      )
        .then((res) => res.json())
        .then((data) => console.log(data));
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(()=>{
    getNews()
  },[])

  return (
    <div>
      <Navbar />
      <Menubar />
    </div>
  );
};

export default Main;
