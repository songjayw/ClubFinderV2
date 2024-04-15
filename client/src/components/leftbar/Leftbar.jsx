import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./leftbar.scss";
import GroupsIcon from '@mui/icons-material/Groups';
import HomeIcon from  '@mui/icons-material/Home';
import CalendarMonthIcon from  '@mui/icons-material/CalendarMonth';
import ExploreIcon from  '@mui/icons-material/Explore';
import { Link } from 'react-router-dom';

const Leftbar = () => {

    const { currentUser } = useContext(AuthContext)
    return (
        <div className="leftbar">
            <div className="container">
                <div className="menu">
                    <div className="user">
                        <img 
                            src="https://images.pexels.com/photos/20339251/pexels-photo-20339251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                        />  
                        <span> Jin Song </span>
                    </div>
                    <div className="itemWButton">
                        <HomeIcon/>
                        <Link to="/myClubs">
                            <span> <button> My Clubs </button> </span>
                        </Link>
                        
                    </div>
                    <div className="itemWButton">
                        <CalendarMonthIcon/>
                        <Link to="/myEvents">
                            <span> <button> My Events </button> </span>
                        </Link>
                       
                    </div>
                    <div className="itemWButton">
                        <ExploreIcon/>
                        <Link to="/explore">
                            <span> <button> Explore </button> </span>
                        </Link>
                    </div>
                    <hr/>
                    <div className="itemWButton">
                    <Link to="/createPost">
                            <span> <button> Create Post </button> </span>
                        </Link>

                        
                    </div>
                    <div className="itemWButton">

                        <Link to="/createEvent">
                            <span> <button> Create Event </button> </span>
                        </Link>
                       
                    </div>
                    <div className="itemWButton">

                        <Link to="/createClub">
                            <span> <button> Create Club </button> </span>
                        </Link>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Leftbar;