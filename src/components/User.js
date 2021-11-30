import React from "react";
import styled from "styled-components";

const UserDiv = styled.div`
    display: flex;
    height: 25vh;
`

const Img = styled.img`
    
`
class User extends React.Component {
    render() {
        return(
            <UserDiv>
                <Img src={this.props.user.avatar_url}/>
                <div>
                    <h2>{this.props.user.name}</h2>
                    <h4>{this.props.user.login}</h4>
                    <h3>Total Repos: {this.props.user.public_repos}</h3>
                    <h3>Total Followers: {this.props.user.followers}</h3>
                </div>
            </UserDiv>
        )
    }
}

export default User