import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import { setQuery } from "../redux/features/searchSlice";
const SearchBar = () => {
  const [text, setText] = useState("");
  const dispatch =useDispatch();
 
  const submitHandle = (e) => {
    e.preventDefault();
   dispatch(setQuery(text));
    setText('')
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandle(e);
        }}
        className="flex gap-5  px-10 py-10 bg-(--c1)"
      >
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          className="  border-2 px-4 py-2 text-xl rounded outline-none w-full"
          type="text"
          placeholder="Search anything..."
          required
        />
        <button className="active:scae-0.95 cursor-pointer border-2 px-4 py-2 text-xl rounded outline-none">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
