import React from 'react'
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from './Channel'
import '../css/search.css'
import Video from './VideoCard'
const Search = () => {
    return (
        <div className="search">
            <div className="search_filter">
                <TuneIcon/>
                <p>Filter</p>
            </div>
            <ChannelRow
                image="https://i.ytimg.com/vi/duJNVv9m2NY/maxresdefault.jpg"
                channel="sonam"
                verified="true"
                sub="0"
                noOfVideos="0"
                des="this is an awesome channel for web tech every day you learn new things from us so keep it up support the channel"
            />
            <hr />
            <div className="videoRow">
            <Video
            title="lorem lasj as  ijdf sf this is ierhwenk
            "image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC8L4yDnIMtk5pz6RlYF4_BArgRLYZI0BrbA&usqp=CAU"channel="sonam"views="344 views"timestamp="3 days ago "channelimage="https://i.ytimg.com/vi/duJNVv9m2NY/maxresdefault.jpg"
            />
            <Video
            title="lorem lasj as  ijdf sf this is ierhwenk
            "image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC8L4yDnIMtk5pz6RlYF4_BArgRLYZI0BrbA&usqp=CAU"channel="sonam"views="344 views"timestamp="3 days ago "channelimage="https://i.ytimg.com/vi/duJNVv9m2NY/maxresdefault.jpg"
            />
            <Video
            title="lorem lasj as  ijdf sf this is ierhwenk
            "image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC8L4yDnIMtk5pz6RlYF4_BArgRLYZI0BrbA&usqp=CAU"channel="sonam"views="344 views"timestamp="3 days ago "channelimage="https://i.ytimg.com/vi/duJNVv9m2NY/maxresdefault.jpg"
            />
            <Video
            title="lorem lasj as  ijdf sf this is ierhwenk
            "image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC8L4yDnIMtk5pz6RlYF4_BArgRLYZI0BrbA&usqp=CAU"channel="sonam"views="344 views"timestamp="3 days ago "channelimage="https://i.ytimg.com/vi/duJNVv9m2NY/maxresdefault.jpg"
            />
            <Video
            title="lorem lasj as  ijdf sf this is ierhwenk
            "image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC8L4yDnIMtk5pz6RlYF4_BArgRLYZI0BrbA&usqp=CAU"channel="sonam"views="344 views"timestamp="3 days ago "channelimage="https://i.ytimg.com/vi/duJNVv9m2NY/maxresdefault.jpg"
            />
            <Video
            title="lorem lasj as  ijdf sf this is ierhwenk
            "image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC8L4yDnIMtk5pz6RlYF4_BArgRLYZI0BrbA&usqp=CAU"channel="sonam"views="344 views"timestamp="3 days ago "channelimage="https://i.ytimg.com/vi/duJNVv9m2NY/maxresdefault.jpg"
            />
            <Video
            title="lorem lasj as  ijdf sf this is ierhwenk
            "image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC8L4yDnIMtk5pz6RlYF4_BArgRLYZI0BrbA&usqp=CAU"channel="sonam"views="344 views"timestamp="3 days ago "channelimage="https://i.ytimg.com/vi/duJNVv9m2NY/maxresdefault.jpg"
            />
            <Video
            title="lorem lasj as  ijdf sf this is ierhwenk
            "image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC8L4yDnIMtk5pz6RlYF4_BArgRLYZI0BrbA&usqp=CAU"channel="sonam"views="344 views"timestamp="3 days ago "channelimage="https://i.ytimg.com/vi/duJNVv9m2NY/maxresdefault.jpg"
            />
            </div>
        </div>
    )
}

export default Search
