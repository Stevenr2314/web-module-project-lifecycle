import React from "react";
import Follower from "./Follower";

class FollowerList extends React.Component {
    render(){
       if (this.props.followerList.length < 1){
            return(<div>No Followers yet</div>) 
        }
        else{
            return(this.props.followerList.map(follower => <Follower key={Math.random()} follower={follower}/>))
        }
  
    } 
}

export default FollowerList