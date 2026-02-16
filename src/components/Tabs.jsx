import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos"];

  const dispatch = useDispatch();
  const activeTab =useSelector((state)=>state.search.activeTab)
  return (
    <div className="flex gap-5 p-10">
      {tabs.map((element) => (
        <button
          className={`${(activeTab === element?'bg-blue-700':'bg-gray-500')} transition px-5 py-2 rounded uppercase active:scale-95 cursor-pointer `}
          key={element}
          onClick={() => {
            dispatch(setActiveTabs(element));
          }}
        >
          {element}{" "}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
