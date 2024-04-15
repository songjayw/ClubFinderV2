import Member from "../member/Member"; 
import "./memberList.scss";


const MemberList = () => {

    const memberList = [
        {
            id: 1,
            userName: "John Smith",
            image: "https://images.pexels.com/photos/46537/mexico-lake-man-wakeboard-46537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }, 
        {
            id: 2,
            userName: "Sophia Martinez",
            image: "https://images.pexels.com/photos/46537/mexico-lake-man-wakeboard-46537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }, 
        {
            id: 3,
            userName: "Mateo Silva",
            image: "https://images.pexels.com/photos/46537/mexico-lake-man-wakeboard-46537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }, 
        {
            id: 4,
            userName: "Grace Nkosi",
            image: "https://images.pexels.com/photos/46537/mexico-lake-man-wakeboard-46537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }, 
        {
            id: 5,
            userName: "Aisha Diop",
            image: "https://images.pexels.com/photos/46537/mexico-lake-man-wakeboard-46537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }, 
        {
            id: 6,
            userName: "Amelia Schmidt",
            image: "https://images.pexels.com/photos/46537/mexico-lake-man-wakeboard-46537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }, 
        {
            id: 7,
            userName: "Fatima Nzomo",
            image: "https://images.pexels.com/photos/46537/mexico-lake-man-wakeboard-46537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }, 
        {
            id: 8,
            userName: "Aria Chen",
            image: "https://images.pexels.com/photos/46537/mexico-lake-man-wakeboard-46537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }, 
        {
            id: 9,
            userName: "Lucas Santos",
            image: "https://images.pexels.com/photos/46537/mexico-lake-man-wakeboard-46537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }, 
        {
            id: 10,
            userName: "Noah Campbell",
            image: "https://images.pexels.com/photos/46537/mexico-lake-man-wakeboard-46537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }, 
        
    ]; 

    return <div className="memberList">
        {memberList.map(member =>(
            <Member member={member} key={member.id}/>
        ))}

    </div>
}; 

export default MemberList; 