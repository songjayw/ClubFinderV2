import "./club.scss";

import FaceIcon from '@mui/icons-material/Face';
import { Link } from 'react-router-dom';

const Club = ({ club }) => {

    return (
        <div className="club"> 
            <div className="container">
                <div className="top"> 
                    <span className="name"> {club.name} </span>
                </div>

                <div className="image">
                    <div className="userInfo">
                        <img src={"./upload/"+club.image } alt=""/>
                        <div className="details">

                        </div>
                    </div>
                </div>
                
                <div className="info">
                        <span><FaceIcon/> Member Count: {club.member_count} </span>
                        <Link to={"../club/"+club.id}>
                            <button>
                                View Club
                            </button>
                        </Link>
                        
                        
                    
                </div>
                
            </div>
        </div>
    ); 
}; 

export default Club;