import React, { useState } from 'react'
import '../css/header.css'
import VideoCallIcon from '@material-ui/icons/VideoCall';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
const Header =() => {
    const [search, setsearch] = useState("")
    return (
        <div className="header">
            <div className="header_left">
            <MenuIcon/>
            <Link to="/">
            <img className="header_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Logo_of_YouTube_%282013-2015%29.svg/2560px-Logo_of_YouTube_%282013-2015%29.svg.png" alt="youtube icon"/>
            </Link>
            </div>
            <div className="header_middle">
                <input onChange={e=>setsearch(e.target.value)} placeholder="Search" type="text" />
                <Link to={`/search/${search}`}>
                    <SearchIcon  className="header_button"/>
                </Link>
            </div>
            <div className="header_right">
                <VideoCallIcon className="header_icon"/>
                <AppsIcon className="header_icon"/>
                <NotificationsIcon className="header_icon"/>
                <Avatar className="header_icon" alt="icon" src="" />
            </div>
        </div>
    )
}

export default Header
