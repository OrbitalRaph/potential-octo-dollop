import React from "react";
import "../Style.css";


 class Information extends React.Component {

    render() {
        return (
            <div className="Information">
                <ul>
                    <li>nom : {this.props.username}</li>
                    <li>genre : {this.props.gender}</li>
                    <li>email : {this.props.email}</li>
                    <li>âge : {this.props.age}</li>
                </ul>
            </div>
        );
    }
 }

 export default (Information);