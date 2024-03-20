import {menu} from '../data/data.js'

const Menubar = () => {
  return (
    <div className="flex justify-center gap-10 items-center shadow-md pb-2 ">
      {menu.map((item, index) => (
        index <= 2 ? (
          <h1 key={index} className="text-gray-500 mt-6 cursor-pointer hover:text-gray-700">{item}{index === 2 && <span className='ml-10'> |</span>}</h1>
        ) : (
          <h1 className="text-gray-500 mt-6 cursor-pointer hover:text-gray-700" key={index}>{item}</h1>
        )
      ))}
    </div>
  );
};


export default Menubar