import "./events.scss";
import Event from "../event/Event"; 
const Events = () => {

    const events = [
        {
            event_id: 1, 
            event_name: "Lake Agnes Hiking Trail", 
            location: "Lake Agnes Trail",
            time: "10:00 AM MDT", 
            attendance_count: 10, 
            event_date: "2024-05-18", 
            image:  "https://images.pexels.com/photos/46537/mexico-lake-man-wakeboard-46537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            
        }, 
        {
            event_id: 2, 
            event_name: "Lake Agnes Hiking Trail", 
            location: "Lake Agnes Trail",
            time: "10:00 AM MDT", 
            attendance_count: 10, 
            event_date: "2024-05-18", 
            image:  "https://images.pexels.com/photos/46537/mexico-lake-man-wakeboard-46537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            
        }, 
        {
            event_id: 3, 
            event_name: "Lake Agnes Hiking Trail", 
            location: "Lake Agnes Trail",
            time: "10:00 AM MDT", 
            attendance_count: 10, 
            event_date: "2024-05-18", 
            image:  "https://images.pexels.com/photos/46537/mexico-lake-man-wakeboard-46537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            
        },  
        {
            event_id: 4, 
            event_name: "Lake Agnes Hiking Trail", 
            location: "Lake Agnes Trail",
            time: "10:00 AM MDT", 
            attendance_count: 10, 
            event_date: "2024-05-18", 
            image:  "https://images.pexels.com/photos/46537/mexico-lake-man-wakeboard-46537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            
        }, 
        {
            event_id: 5, 
            event_name: "Lake Agnes Hiking Trail", 
            location: "Lake Agnes Trail",
            time: "10:00 AM MDT", 
            attendance_count: 10, 
            event_date: "2024-05-18", 
            image:  "https://images.pexels.com/photos/46537/mexico-lake-man-wakeboard-46537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            
        }, 
        

    ]; 


    return (
    
        <div className="events">


            
                {events.map(event =>(
                    <Event event={event} key={event.event_id}/>
                ))}
            
 

        </div>

    );
}; 

export default Events;




