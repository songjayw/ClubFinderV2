import React, { useState, useContext } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Typography } from '@mui/material';
import { AuthContext } from "../../context/authContext"; 
import "./Edituser.scss";

const Edituser = ({ open, handleClose}) => {
    const { currentUser, updateCurrentUser } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        name: currentUser?.name || '',
        location: currentUser?.location || '',
        username: currentUser?.username || '',
        profilePicture: currentUser?.profilePicture || '',
        bannerPicture: currentUser?.bannerPicture || ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateCurrentUser(formData);
        handleClose();
    };

    return (
    <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit Profile</DialogTitle>
                <DialogContent className="editUserForm">
                    <TextField
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                    />
                    <Typography variant="subtitle1">Profile Picture</Typography>
                    <input
                        accept="image/*"
                        type="file"
                        name="profilePicture"
                        onChange={handleFileChange}
                        style={{ margin: '10px 0' }}
                    />
                    
                    <Typography variant="subtitle1">Banner Picture</Typography>
                    <input
                        accept="image/*"
                        type="file"
                        name="bannerPicture"
                        onChange={handleFileChange}
                        style={{ margin: '10px 0' }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                    <Button onClick={handleSubmit}>Update</Button>
                </DialogActions>
            </Dialog>
        );
    };
export default Edituser;
