import React from "react";

const ChatMessage = ({ name,message }) =>{
    return (
        <div className="flex items-center p-2">
            <img 
            className="w-6 h-6"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKc-wiispmJhA_NSp9otnE0B4pIkjFuEiNoJgDzG8Gstq85g4_mDt9z1e9O51Ad4RHqPs&usqp=CAU" 
            alt="user" />
            <span className="px-2 font-bold">{name}</span>
            <span>{message}</span>
        </div>
    )
}

export default ChatMessage;