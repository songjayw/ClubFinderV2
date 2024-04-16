
import React, { useState } from 'react';
import "./profile.scss";
import PlaceIcon from '@mui/icons-material/Place';
import CakeIcon from '@mui/icons-material/Cake'
import Edituser from '../../components/edituser/Edituser';
import ProfileClubs from "../../components/profileClubs/ProfileClubs";

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);

    const handleOpenEditModal = () => setIsEditing(true);
    const handleCloseEditModal = () => setIsEditing(false);

    return (
        <div className="user-profile">
            <div className="inner-container-clubProfile">
                <div className="user-Info">
<<<<<<< HEAD
                    <div className="images">
=======
                    
                    <div className="images-profile">
>>>>>>> origin/finishFrontend
                        <img src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="cover" />

                        <div className="profile-pic-div"> <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" alt="" className="profilePic" /></div>
                        

                        <div className="topRight">
                            <button className="editButton" onClick={handleOpenEditModal}>Edit</button>
                            <Edituser open={isEditing} handleClose={handleCloseEditModal} />
                        </div>

                        <div className="left-bottom">
                            <div className="name">Jin Song</div>
                            
                            <div className="subtitle">
                                <PlaceIcon /> Calgary 
                            </div>
                            <div className="subtitle">
                                <CakeIcon /> 1867
                            </div>
                         
                        </div>

                    </div>
                    
                </div>
                <div className='seperate'></div>
                <div className="myClubsContainer">
                    <ProfileClubs/>
                </div>
            </div>     
        </div>





            
    )
}

export default Profile;