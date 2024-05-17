import { useEffect, useState } from "react";
import Menubar from "./Menubar";
import Navbar from "./Navbar";
import News from "./News";

const Main = () => {
  const [news,setNews] = useState([])
  async function getNews() {
    try {
      fetch(
        `https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=987a63c01f5d42aabf479c02d492c0a9`
      )
        .then((res) => res.json())
        .then((data) => setNews(data.articles));
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
      <News news={news}/>
    </div>
  );
};

export default Main;
