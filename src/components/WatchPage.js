import React from "react"
import { YOUTUBE_VIDEO_API } from "../utils/constants"; 
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import VideoContainer from "./VideoContainer";

const WatchPage = () => {
    

    let [searchParams] = useSearchParams();
    // console.log(searchParams.get("v"))
    const [discriptionData, setDiscriptionData] = useState([]);
    let [videoData ,setVideoData] = useState({})
    
    const getDiscription = async () =>{
        const currentId = searchParams.get("v");
        const data = await fetch(YOUTUBE_VIDEO_API);
        const json = await data.json();
        videoData =json.items.filter((ele) => ele.id === currentId);
        // console.log(json.items.filter((el)=> el.id == currentId));
        // setDiscriptionData(json.items);
        // console.log(discriptionData.filter((ele) => ele.id === currentId ))
        setVideoData(videoData[0]);
        // console.log(videoData[0]);
    } 

    const dispatch = useDispatch();
    useEffect(() =>{

        getDiscription()
        dispatch(closeMenu());

    },[dispatch])
    //  grid grid-cols-2 gap-2
    return (
        <div className=" flex flex-col w-full">
        <div className="px-5 flex w-full">
        <div>
            <iframe 
            width="850" 
            height="450" 
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}  
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
            </iframe>
        </div>
        <div className="w-full">
            <LiveChat />
        </div>
        </div>
        <div className=" w-full pl-6 pt-4">
            <p className="text-lg font-bold w-[850px]">{videoData?.snippet?.title}</p> 
        </div>
        <div className="flex pb-5"> 
        <div className="pt-2 pl-6 w-[850px] flex ">
            <div>
                <img 
                className="w-12 h-12 border border-black rounded-full"
                src="https://cdn.logojoy.com/wp-content/uploads/20200402150533/PewDiePielogo.png" 
                alt="channelIcon" 
                />
            </div>
                <div className="pl-3">
                    <p className=" font-bold">{videoData?.snippet?.channelTitle}</p> 
                    <p className="font-medium">{Intl.NumberFormat("en", {notation: "compact"}).format(videoData?.statistics?.viewCount)} views</p>
                </div>
        </div>
        <div className="pt-2  w-[850px] ">
            <button className="font-semibold border border-gray-400 px-3 py-2  rounded-l-full bg-gray-100 hover:bg-gray-300">{Intl.NumberFormat("en", {notation: "compact"}).format(videoData?.statistics?.likeCount)} likes</button>
            <button className="font-semibold border border-gray-400 px-3 py-2 rounded-r-full bg-gray-100  hover:bg-gray-300">dislike</button>
            {/* <button className="px-2">{Intl.NumberFormat("en", {notation: "compact"}).format(videoData?.statistics?.commentCount)}{}</button> */}
        </div>
        </div>
        <div className="w-[850px]">
            <CommentsContainer />
        </div>   
        </div>
    )
}

export default WatchPage;