import React from "react";
import "../Style.css"


 class Avatar extends React.Component {

    render() {
        return (
            <div className="Avatar">
                <img src={this.props.picture} alt="Avatar" />
            </div>
        );
    }
 }

 export default (Avatar);