import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import { clearCollection } from "../redux/features/collectionSlice";
function CollectionPage() {
  const collection = useSelector((state) => state.collection.items);
  const dispatch = useDispatch();
  const clearAll = () => {
    dispatch(clearCollection());
  };
  return (
    <div className="overflow-auto px-10 py-6">
      {collection.length > 0 ? (
        <div className="flex justify-between">
          <h2 className="text-2xl font-medium">Your Collection</h2>
          <button
            onClick={() => {
              clearAll();
            }}
            className="active:scale-95 transition cursor-pointer bg-red-600 px-5 py-3 text-base font-medium roumded"
          >
            {" "}
            Clear Collection
          </button>
        </div>
      ) : (
        <h2 className="text-2xl font-medium text-center">Collection is Empty</h2>
      )}
      <div className="flex w-full justify-start flex-wrap gap-6   ">
        {collection.map((item, idx) => {
          return (
            <div key={idx}>
              <CollectionCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CollectionPage;
