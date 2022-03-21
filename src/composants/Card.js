import React from "react";
import axios from "axios";
import Avatar from "./Avatar";
import Information from "./Information"

 class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username : "",
            gender : "",
            picture : "",
            email : "",
            age : 0
        };
    }

    componentDidMount() {
        axios.get('https://randomuser.me/api/')
            .then((response) => {
                const utilisateur = response.data.results[0];
                // On récupère les données reçues et on modifie le tableau dans l'état
                this.setState({
                    username : utilisateur.name.first + " " + utilisateur.name.last,
                    gender : utilisateur.gender,
                    picture : utilisateur.picture.large,
                    email : utilisateur.email,
                    age : utilisateur.dob.age
                })
            })
        }

    render() {
        return (
            <div className="Card">
                <Avatar picture={this.state.picture}/>
                <Information username={this.state.username} gender={this.state.gender} email={this.state.email} age={this.state.age}/>
            </div>
        );
    }
 }

 export default (Card);