import React, { useState } from "react";
import { Link } from "react-router-dom";
import DeleteConfirm from "./DeleteConfirm";
import user from '../Images/user.jpg';

const ContactCard = (props) => {
    const{ id, name, email } = props.contact;
    const [showConfirm, setShowConfirm] = useState(false);

    return(
         <div className="item" style={{ display: "flex", alignItems: "center" }}>
            <img className="ui avatar image" src={user} alt="user" />
                <div className="content">
                <Link to={{pathname:`/contact/${id}`, state:{contact:props.contact}}}>
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </Link>
                </div>
                <i 
                className="trash alternate outline icon"
                style={{color:"red", cursor: "pointer", marginLeft: "auto"}}
                onClick= { () => setShowConfirm(true)}
               ></i>

                {showConfirm && (
                <DeleteConfirm
                    onConfirm={() => {
                        props.clickHandler(id);
                        setShowConfirm(false);
                    }}
                    onCancel={() => setShowConfirm(false)}
                />
            )}
            </div>
    );

};

export default ContactCard;