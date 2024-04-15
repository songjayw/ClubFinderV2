import React, { useState } from 'react';
import "./clubProfile.scss";
import Events from "../../components/events/Events";
import Posts from "../../components/posts/Posts";
import MemberList from "../../components/memberList/memberList";
import ImageGallery from '../../components/imageGallery/imageGallery';

const ClubProfile = () => {
    const [showEvents, setShowEvents] = useState(true);
    const [showPosts, setShowPosts] = useState(false);
    const [showImageGallery, setShowImageGallery] = useState(false);
    const [joinedClub, setJoinedClub] = useState(false); // Track whether the user has joined the club or not
    const [buttonClicked, setButtonClicked] = useState(false); // Track whether the button has been clicked or not

    const handleEventsClick = () => {
        setShowEvents(true);
        setShowPosts(false);
        setShowImageGallery(false);
    };

    const handlePostsClick = () => {
        setShowEvents(false);
        setShowPosts(true);
        setShowImageGallery(false);
    };

    const handleImageGalleryClick = () => {
        setShowEvents(false);
        setShowPosts(false);
        setShowImageGallery(true);
    };

    const handleJoinClub = () => {
        // Toggle whether the user has joined the club
        setJoinedClub(prevJoinedClub => !prevJoinedClub);
        // Set button clicked to true
        setButtonClicked(true);
    };

    return (
        <div className="clubprofile">
            <div className="inner-container-clubProfile">
                <div className="images">
                    <img src={"https://images.pexels.com/photos/1855418/pexels-photo-1855418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="" className="cover" />
                    
                    <div className="text-container"> 
                        <div className="c1">Hiking In Nature</div>
                        <div className="c2">Health & Fitness</div>
                        <div className="c3">Founded: May 3, 2023</div>
                    </div>

                   
                </div>

                <div className="components">
                    <div className="edit"> <button className="edit-button">Edit</button></div>
                   
                    <div className="outer-buttons">
                        <div className="buttons-clubProfile">
                            <span><button onClick={handleEventsClick}>View Club Events</button></span>
                            <span><button onClick={handlePostsClick}>View Posts</button></span>
                            <span><button onClick={handleImageGalleryClick}>Image Gallery</button></span>
                        </div>
                    </div>

                    <div className="show-component">
                        {showEvents && <Events />}
                        {showPosts && <Posts />}
                        {showImageGallery && <ImageGallery />}
                    </div>
                    
                    <div className="header"><h1>Club Members</h1></div>
                    
                    <MemberList />

                    <div className="join-club">
                        {/* Toggle button color based on whether the button has been clicked */}
                        <button onClick={handleJoinClub} style={{ backgroundColor: buttonClicked ? 'rgb(113, 113, 113)' : '#514949' }}>{joinedClub ? "Joined club!" : "Join Club"}</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ClubProfile;