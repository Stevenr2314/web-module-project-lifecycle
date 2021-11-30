import React from "react";

class User extends React.Component {
    render() {
        return(
            <div>User Div
                <span>Avatar</span>
                <div>
                    <h2>Name</h2>
                    <h4>Handle</h4>
                    <h3>Total Repos: #</h3>
                    <h3>Total Followers: #</h3>
                </div>
            </div>
        )
    }
}

export default User