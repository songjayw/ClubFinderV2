import Club from "../club/Club"; 
import"./profileClubs.scss";

const ProfileClubs = () => {

    const clubs = [
        {
            club_id: 1, 
            date_Founded: "2024-03-18", 
            club_description: "Join our hiking club for thrilling adventures amidst nature's finest landscapes. We embark on exhilarating trails, exploring lush forests, rugged mountains, and picturesque vistas. Together, we'll conquer peaks, forge unforgettable memories, and foster a community bound by a love for the great outdoors.", 
            member_count: 10, 
            member_max_count: 15, 
            manager_id: 61, 
            co_manager_id: 13, 
            club_name: "Hiking Club", 
            category_name: " Health & Fitness", 
            image:  "https://images.pexels.com/photos/46537/mexico-lake-man-wakeboard-46537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            
        }, 
        {
            club_id: 2, 
            date_Founded: "2024-03-18", 
            club_description: "Join our hiking club for thrilling adventures amidst nature's finest landscapes. We embark on exhilarating trails, exploring lush forests, rugged mountains, and picturesque vistas. Together, we'll conquer peaks, forge unforgettable memories, and foster a community bound by a love for the great outdoors.", 
            member_count: 10, 
            member_max_count: 15, 
            manager_id: 61, 
            co_manager_id: 13, 
            club_name: "Hiking Club (But Better)", 
            category_name: " Health & Fitness", 
            image:  "https://images.pexels.com/photos/46537/mexico-lake-man-wakeboard-46537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }, 
        {
            club_id: 3, 
            date_Founded: "2024-03-18", 
            club_description: "Join our hiking club for thrilling adventures amidst nature's finest landscapes. We embark on exhilarating trails, exploring lush forests, rugged mountains, and picturesque vistas. Together, we'll conquer peaks, forge unforgettable memories, and foster a community bound by a love for the great outdoors.", 
            member_count: 10, 
            member_max_count: 15, 
            manager_id: 61, 
            co_manager_id: 13, 
            club_name: "Hiking Club (But Better)", 
            category_name: " Health & Fitness", 
            image:  "https://images.pexels.com/photos/46537/mexico-lake-man-wakeboard-46537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }, 
      

    ]; 


    return <div className="profile-clubs">
        {clubs.map(club =>(
            <Club club={club} key={club.club_id}/>
        ))}

    </div>
}; 

export default ProfileClubs;