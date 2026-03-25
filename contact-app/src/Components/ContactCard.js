import React, { useState } from "react";
import { Link } from "react-router-dom";
import DeleteConfirm from "./DeleteConfirm";
import user from '../Images/user.jpg';

const ContactCard = (props) => {
    const{ id, name, email } = props.contact;
    const [showConfirm, setShowConfirm] = useState(false);

    return(
         <div className="item" style={{ 
            display: "flex", 
            alignItems: "center",
            borderBottom:"1px solid #e0e0e0",
            padding:"8px 0",
            margin:"0" 
        }}>
            <img className="ui avatar image" src={user} alt="user" />
                <div className="content" style={{ marginLeft: "10px" }}> 
            <Link 
                to={{pathname:`/contact/${id}`, state:{contact:props.contact}}}>
                    <div className="header" style={{ color: "#000000", fontWeight: "bold" }}>{name}</div>
                    <div>{email}</div>
                </Link>
            </div>
            {/* <i 
                className="trash alternate outline icon"
                style={{color:"red", marginTop:"7px", marginLeft: "10px"}}
                onClick= { () => setShowConfirm(true)}
            ></i>
            <Link 
               to={{pathname:`/edit`, state:{contact:props.contact}}}></Link>
            <i 
                className="edit alternate outline icon"
                style={{color:"blue", marginTop:"7px"}}
                onClick= { () => setShowConfirm(true)}
            ></i> */}
            <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "8px" }}>
                <Link to={{pathname:`/edit`, state:{contact:props.contact}}}>
                    <i 
                        className="edit alternate outline icon"
                        style={{color:"blue", fontSize:"15px", lineHeight:"1", margin:"0"}}
                    ></i>
                </Link>
                <i 
                    className="trash alternate outline icon"
                    style={{color:"red", fontSize:"15px", lineHeight:"1", margin:"0"}}
                    onClick={() => setShowConfirm(true)}
                ></i>
            </div>

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