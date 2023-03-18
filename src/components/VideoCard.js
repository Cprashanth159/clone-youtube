import React from "react";
import moment from "moment";

const VideoCard = ({info}) => {

    const {snippet , statistics } = info;
    const {channelTitle, title ,thumbnails,publishedAt} = snippet;
    // console.log(info)

    moment.locale("en-short"); // set the locale before using moment()

    return(
        <div className="p-2 m-2 w-72 " style={{width:270}}>
            <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
            <img src="" alt=""/>
            <ul>
                <li className="description pt-2 font-semibold">{title}</li>
                <li className="font-normal pt-2">{channelTitle}</li>
                <li className="font-normal">{Intl.NumberFormat("en", {notation: "compact"}).format(statistics.viewCount)} views • {moment(publishedAt).fromNow()}</li>
            </ul>
        </div>
    )
}

export default VideoCard;