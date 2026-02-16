import { useEffect } from "react";
import {fetchPhotos,fetchVideos} from  "../api/mediaApi.js";
import { setLoading,setError,setResults } from "../redux/features/searchSlice.js";
import { useDispatch,useSelector } from "react-redux";
import ResultCard from "./ResultCard.jsx";



export default function ResultGrid() {

    const dispatch =useDispatch();
    const {query,results,activeTab,loading,error} =useSelector((store)=>store.search);
 

 useEffect(()=>{
const getData = async()=>{
  try{
    dispatch(setLoading(true))
      let data =[];
    if(activeTab=='photos'){
        if(!query) return;
       let  response = await fetchPhotos(query);
         data =response.results.map((item)=>({
            id:item.id,
            type:'photo',
            title:item.alt_description,
            thumbnail:item.urls.small ,
            src:item.urls.full,
            url:item.links.html
         }))        
    }
      if(activeTab=='videos'){
         let response= await fetchVideos(query);
         data =response.videos.map((item)=>({
            id:item.id,
            type:'video',
            title:item.user.name || "video",
            thumbnail:item.image ,
            src:item.video_files[0].link,
            url:item.url
         })) ;
         
    }
    dispatch(setResults(data));
     

  }catch(err){
    dispatch(setError(err.message))
  }
 }
 getData()
 },[query,activeTab,dispatch])
    if(error)  return <h1>Error</h1>
    if(loading) return <h1>Loading..</h1>
  return (
    <div className="flex w-full justify-between flex-wrap gap-6 overflow-auto px-10 ">
        {results.map((item,idx)=>{
  return <div key={idx}>
    <ResultCard item={item}/>
  </div>
 })}
     </div>
  )
}
