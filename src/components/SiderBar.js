import React from "react" 
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SiderBar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

     //Early Return
    if(!isMenuOpen) return false

    //fixed top-10 bg-orange-400
    return (
        <div className="p-10 shadow-xl w-48">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li>Shorts</li>
                <li>Subscriptions</li>
                <li>Library</li>
                <li>History</li>
                <li>Liked Video</li>
            </ul>
            <h1 className="font-bold pt-5"> Explore</h1>
            <ul className="pt-2">
                <li>Trending</li>
                <li>Shopping</li>
                <li>Music</li>
                <li>Movies</li>
                <li>Live</li>
                <li>Gaming</li>
                <li>Sports</li>
            </ul>
        </div>
    )
}

export default SiderBar;