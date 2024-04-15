import "./member.scss";

const Member = ({member}) => {
    return (
        <div className="member"> 
                <div className="member-slot">
                    <div className= "imgProfile"><
                        img src={member.image} alt=""/> 
                    </div>
                    
                    <span className="userName">{member.userName}</span>

                    <button className= "Remove">
                        Remove
                    </button>

                </div>
      
        </div>
    ); 
}; 

export default Member;