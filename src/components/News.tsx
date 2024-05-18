type newsProp = {
  news: any;
};
const News = (props: newsProp) => {
  console.log(props);
  return (
    <div className="flex items-center justify-center bg-gray-100 mt-10 w-screen">
      <div className="grid grid-cols-2 p-5 rounded-md bg-white">
        <a href={props?.news[99]?.url} target="_blank">
          <div className="w-70">
            <h1 className="text-xl font-semibold text-blue-400">Top stories</h1>
            <hr className="mb-5 mt-3 w-full" />
            <img
              src={props?.news[99]?.urlToImage}
              className="w-72 h-40 rounded-md"
            />
            <h1 className="font-medium text-sm">
              {props?.news[99]?.source?.name.toUpperCase()}
            </h1>
            <h2 className="text-md w-70 text-blue-500 hover:underline cursor-pointer">
              {props?.news[99]?.title}
            </h2>
          </div>
        </a>
        <div className="w-60 ml-7">
          <h1 className="font-medium text-sm">
            {props?.news[99]?.source?.name.toUpperCase()}
          </h1>
          <a href={props?.news[99]?.url} target="_blank">
            <h2 className="text-sm w-72 text-blue-500 hover:underline cursor-pointer">
              {props?.news[99]?.title}
            </h2>
          </a>
          <h1 className="font-medium text-sm mt-3">
            {props?.news[98]?.source?.name.toUpperCase()}
          </h1>
          <a href={props?.news[98]?.url} target="_blank">
            <h2 className="text-sm w-72 text-blue-500 hover:underline cursor-pointer">
              {props?.news[98]?.title}
            </h2>
          </a>
          <h1 className="font-medium text-sm mt-3">
            {props?.news[97]?.source?.name.toUpperCase()}
          </h1>
          <a href={props?.news[97]?.url} target="_blank">
            {" "}
            <h2 className="text-sm w-72 text-blue-500 hover:underline cursor-pointer">
              {props?.news[97]?.title}
            </h2>
          </a>
        </div>
      </div>
      <div className="ml-5 me-3 bg-white p-5 w-5/12 rounded-md ">
        <h1 className="text-xl font-semibold text-blue-400">Picks for you</h1>
        <hr className="mb-5 mt-3 w-full" />

        <div className="flex items-center ">
          <div>
            <h1 className="font-bold">{props?.news[95]?.source.name}</h1>
            <h2>{props?.news[95]?.title}</h2>
          </div>
          <img
            src={props?.news[95]?.urlToImage}
            className="w-10 h-10 rounded-md"
            alt=""
          />
        </div>
        <hr className="mt-0 w-full" />

        <div className="flex items-center ">
          <div>
            <h1 className="font-bold">{props?.news[94]?.source.name}</h1>
            <h2>{props?.news[94]?.title}</h2>
          </div>
          <img
            src={props?.news[94]?.urlToImage}
            className="w-10 h-10 rounded-md"
            alt=""
          />
        </div>
        <hr className=" mt-3 w-full" />

        <div className="flex items-center ">
          <div>
            <h1 className="font-bold">{props?.news[93]?.source.name}</h1>
            <h2>{props?.news[93]?.title}</h2>
          </div>
          <img
            src={props?.news[93]?.urlToImage}
            className="w-10 h-10 rounded-md"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default News;
