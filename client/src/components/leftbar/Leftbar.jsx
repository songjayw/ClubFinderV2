import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./leftbar.scss";
import { Link } from 'react-router-dom';
import { 
    Home as HomeIcon,
    CalendarToday as CalendarIcon,
    Explore as ExploreIcon,
    People as PeopleIcon,
    AddCircle as AddCircleIcon
} from '@mui/icons-material';

import SensorDoorIcon from '@mui/icons-material/SensorDoor';

const Leftbar = () => {
    const { currentUser } = useContext(AuthContext);
    
    return (
        <div className="leftbar">
            <div className="container">
                <div className="menu">
                    <div className="user">
                        <img 
                            src="https://images.pexels.com/photos/20339251/pexels-photo-20339251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                        />  
                        <span className="userName"> <Link to="/profile" cclasssName="link-name"> Jin Song </Link> </span>
                    </div>
                    <hr/>
                    
                    <Link to="/" className="item">
                        <SensorDoorIcon />
                        <span> Home </span>
                    </Link>
                    <Link to="/explore" className="item">
                        <ExploreIcon/>
                        <span> Explore </span>
                    </Link>
                    <Link to="/myClubs" className="item" >
                        <HomeIcon/>
                        <span> My Clubs </span>
                    </Link>
                    <Link to="/myEvents" className="item">
                        <CalendarIcon/>
                        <span> My Events </span>
                    </Link>

                    
            
                    <hr/>
                    
                    <Link to="/createPost" className="item">
                        <AddCircleIcon/>
                        <span> Create Post </span>
                    </Link>
                    <Link to="/createEvent" className="item">
                        <AddCircleIcon/>
                        <span> Create Event </span>
                    </Link>
                    <Link to="/createClub" className="item">
                        <AddCircleIcon/>
                        <span> Create Club </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Leftbar;
