import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import '../css/channel.css'
import VerifiedIcon from '@material-ui/icons/CheckCircleOutline';
const Channel = ({image,channel,verified,sub,noOfVideos,des}) => {
    return (
        <div className="channel">
            <div className="channel_image">
                <Avatar className="channel_image_logo" src={image} alt="logo"/>
            </div>
            <div className="channel_text">
                <h4>{channel} {verified && <VerifiedIcon/> }</h4>
                <p>{sub} subscribers . {noOfVideos} vidoes</p>
                <p>{des}</p>
            </div>
        </div>
    )
}

export default Channel
