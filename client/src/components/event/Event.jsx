import "./event.scss";

import FaceIcon from '@mui/icons-material/Face';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const Event = ({ event }) => {

    return (
        <div className="event"> 
            <div className="container">
                
                <div className="top"> 
                    <span className="name"> {event.event_name} </span>
                </div>

                <div className="image">
                    <div className="userInfo">
                        <img src={event.image} alt=""/>
                        <div className="details"></div>
                    </div>
                </div>
                
                <div className="info">
                    <div className="info-item">
                        <span><FaceIcon/> Attendance Count: {event.attendees} </span>
                    </div>
                    <div className="info-item">
                        <span> <LocationOnIcon/> Location: {event.location} </span>
                    </div>
                    <div className="info-item">
                        <span> <AccessTimeIcon/> Time: {event.time} </span>
                    </div>

                    <div className="participate-button">
                        <button>Participate</button>
                    </div>
                </div>
                
            </div>
        </div>
    ); 
}; 

export default Event;