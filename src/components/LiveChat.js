import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import ChatMessage from "./ChatMessage";
import { generateRandomName ,generateRandomMessage } from "../utils/helper";



const LiveChat = () => {

    let [liveMessage, setLiveMessage] = useState("");

    const dispatch = useDispatch()
    const ChatMessages = useSelector((store) => store.chat.messages)

    useEffect(() =>{
        const i = setInterval(() => {
            //API Polling
            console.log("api poling")
            dispatch(
                addMessage({
                    name:generateRandomName(),
                    message:generateRandomMessage(8)
            }))
        },3000)
        return () => clearInterval(i)
    },[dispatch])

    return(
        <>
        <div className="p-2 ml-2 h-[408px] border border-black bg-slate-100 rounded overflow-y-scroll flex flex-col-reverse">
            <div>
            {
                ChatMessages.map((c,i) => (
                    <ChatMessage key={i} name={c.name} message={c.message}/>
                ))
            }
            </div>
        </div> 
        <form className="border border-black w-full p-2 ml-2"
            onSubmit={(e) => {
                e.preventDefault();
                dispatch(addMessage({
                    name:"prashanth",
                    message:liveMessage
                }))
                setLiveMessage("")
            }}
        >
            <input 
            className="px-2 w-[368px]" 
            type="text" 
            value={liveMessage}  
            onChange={(e) =>setLiveMessage(e.target.value)}
            />
            <button className="px-2 mx-2 bg-gray-500 rounded text-white">Send</button>
        </form>
        </>
    )
}

export default LiveChat;