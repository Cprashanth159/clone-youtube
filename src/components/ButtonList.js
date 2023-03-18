import React from "react";
import Button from "./Button";

const list = ["All" ,"News" ,"Computer Science" ,"Live" ,"Music" ,"Films" ,"Gaming" ,"History" ,"Javascript" ,"React" ,"Movies" ,"Cricket" ,"Hockey", "Cooking"]

const ButtonList = () => {
    return (
        <div className="flex">
            {
                list.map((ele,index) => {
                    return <Button key={index} name={ele}/>
                })
            }
        </div>
    )
}

export default ButtonList;