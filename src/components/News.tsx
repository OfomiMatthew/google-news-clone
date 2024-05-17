
type newsProp={
  news:any
}
const News = (props:newsProp) => {
  console.log(props)
  return (
    <div>

   <img src={props?.news[1]?.urlToImage} className="w-70 h-40 rounded-md" />
    </div>
  )
}

export default News