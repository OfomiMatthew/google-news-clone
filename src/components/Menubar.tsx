import {menu} from '../data/data.js'

const Menubar = () => {
  return (
    <div className="flex justify-center gap-10 items-center">
      {menu.map((item, index) => (
        index <= 2 ? (
          <h1 key={index} className="text-gray-500 mt-6">{item}<span>|</span></h1>
        ) : (
          <h1 key={index}>{item}</h1>
        )
      ))}
    </div>
  );
};


export default Menubar