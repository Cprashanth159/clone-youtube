import React from "react"; 
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useState, useEffect } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";


const Head = () => {
    const [searchText ,setSearchText] = useState("")
    const [suggestions, setSuggestions] = useState([])
    const [showSuggestion , setShowSuggestion] = useState(false)
    // console.log(searchText)

    const dispatch = useDispatch()
    
    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }

    const searchCache = useSelector((store) => store.search);


    useEffect(() => {
        const timer = setTimeout(() =>{
        if(searchCache[searchText]){
            setSuggestions(searchCache[searchText])
        } else {
            getSearchSugestion()   
        }
        
    },200)

        return(() =>{
            clearTimeout(timer)
        })
    },[searchText])

    const getSearchSugestion = async () =>{
        console.log("api - " + searchText)
        const data = await fetch(YOUTUBE_SEARCH_API + searchText);
        const json = await data.json()
        // console.log(json[1])
        setSuggestions(json[1])

        // update cache
        dispatch(cacheResults({
            [searchText]: json[1],
        })
        );
    }


    return (
        <div className="sticky top-0 z-50 bg-white">
        <div className="grid grid-flow-col p-4  ">
            <div className="flex col-span-1 cursor-pointer">
                <img 
                    onClick={() => toggleMenuHandler()}
                    className="h-5 "
                    src="https://cdn-icons-png.flaticon.com/512/3917/3917215.png" 
                    alt="toggle-menu" 
                />
                <img 
                    className="h-5 mx-7"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" 
                    alt="youtube-logo" 
                />
            </div>
            {/* <div > */}
                <div className=" flex col-span-8 px-10 ">
                    <input 
                    className="px-3 w-1/2 border border-gray-400 p-1 rounded-l-full" 
                    type="text" 
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onFocus={() =>setShowSuggestion(true)}
                    onBlur={() =>setShowSuggestion(false)}
                    />
                    <button className="border border-gray-400 p-1 rounded-r-full bg-gray-100">
                        <img
                            className="h-5 px-4"
                            src="https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/search-512.png" 
                            alt="search-icon" 
                        />
                    </button>
                    
                {showSuggestion && <div className="suggestion-box ">
                    {/* fixed bg-white py-2 px-2 w-50 shadow-lg rounded-lg border border-grey-300 */}
                    <ul>
                        {
                            suggestions.map(suggestion => <li key={suggestion} className="py-2 px-2 hover:bg-gray-200"> {suggestion} </li>)
                        }
                    </ul>
                </div> }
                </div>
            {/* </div> */}
            <div className="col-span-1">
                <img 
                    className="h-8 w-8"
                    src="https://t3.ftcdn.net/jpg/05/17/79/88/360_F_517798849_WuXhHTpg2djTbfNf0FQAjzFEoluHpnct.jpg" 
                    alt="user"
                />
            </div>
            
        </div>
        </div> 
    )
}

export default Head;