import { useEffect, useState } from "react";
import Menubar from "./Menubar";
import Navbar from "./Navbar";
import News from "./News";
import moment from 'moment'

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

  const getDate: any = new Date()

  return (
    <div>
      <Navbar />
      <Menubar />
      <div className="bg-gray-100 pt-5">
        <h1 className="ml-28 text-3xl">Your Briefing</h1>
      <h2 className="text-slate-600 ml-28 text-sm mt-3">{moment(getDate).format('dddd, MMMM Do YYYY')}</h2>
      <News news={news}/>
      </div>
    </div>
  );
};

export default Main;
