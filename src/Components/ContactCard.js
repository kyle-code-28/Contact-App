import React from "react";
import user from '../Images/user.jpg';

const ContactCard = (props) => {
    const{ id, name, email } = props.contact;
    return(
         <div className="item" style={{ display: "flex", alignItems: "center" }}>
            <img className="ui avatar image" src={user} alt="user" />
                <div className="content">
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </div>
                <i 
                className="trash alternate outline icon"
                style={{color:"red", cursor: "pointer", marginLeft: "auto"}}
                ></i>
            </div>
    );

};

export default ContactCard;