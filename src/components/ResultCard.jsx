import {useDispatch} from "react-redux"
import { addCollection, addedToast } from "../redux/features/collectionSlice";

const ResultCard = ({ item }) => {
 const dispatch =useDispatch();
  const addToCollection =(item)=>{
    dispatch(addCollection(item))
    dispatch(addedToast())
   }
  return (
    <div className="w-[18vw] h-80 bg-white relative rounded-xl overflow-hidden ">
      <a href={item.url} target="_blank" className="h-full">
        {item.type == "photo" ? (
          <img
            className="w-full h-full object-cover object-center"
            src={item.src}
            alt={item.title}
          />
        ) : (
          ""
        )}
        {item.type == "video" ? (
          <video
            className="w-full h-full object-cover object-center "
            autoPlay
            loop
            muted
            src={item.src}
          ></video>
        ) : (
          ""
        )}
      </a>

      <div
        id="bottom"
        className=" flex justify-between items-center gap-  w-full absolute py-6 px-4 text-white bottom-0"
      >
        <h2 className="text-lg font-semibold h-14 capitalize line-clamp-3 overflow-hidden">{item.title}</h2>
        <button onClick={()=>{
          addToCollection(item)
        }} className="active:scale-95 bg-indigo-600 text-white rounded px-3 py-2 cursor-pointer">Save</button>
      </div>
    </div>
  );
};

export default ResultCard;
