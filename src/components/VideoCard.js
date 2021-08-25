import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import '../css/videocard.css'
const VideoCard = ({title,image,channel,views,timestamp,channelimage}) => {
    return (
        <div className="videoCard">
            <img src={image} alt="image" />
            <div className="videoCard_info">
                <Avatar className="videoCard_avatar" alt={channel} src={channelimage}/>
                <div className="videoCard_text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} . {timestamp}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
