import React, { useState } from "react";
import {Link} from 'react-router-dom';
import ContactCard from "./ContactCard";

/* const ContactList = (props) => {
    console.log(props);

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    }; */
    

   /*  const renderContactList = contacts.map((contact) => {
        return <ContactCard contact ={contact} clickHandler = {deleteContactHandler} key={ contact.id } />;
    });
   return <div className="ui celled list">
    <h3>
        Contacts <span className="ui circular label">{props.contacts.length}</span>
    </h3>
            {renderContactList}
        </div>;
};  */


const ContactList = (props) => {
    const [searchTerm, setSearchTerm] = useState("");
    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard 
            key={contact.id} 
            contact={contact} 
            clickHandler={props.getContactId}
            />
        );
    });

    
    return (
        <div className="ui card" style={{ width: "100%", padding: "20px" }}>
            <h2>
                Contact List
                <Link to="/add">
                    <button className="ui button blue right" style={{ float:"right" }}>Add Contact</button>
                </Link>
            </h2>
        <div className="ui search" style={{ margin: "10px 0" }}>
            <div className="ui icon input" style={{ width: "100%" }}>
                <input 
                    type="text"
                    placeholder="Search contacts..."
                    value={props.term}  //<- controlled by App.js
                    onChange={(e) => props.searchKeyword(e.target.value)} 
                    style={{ width: "100%" }}
                />
                <i 
                className="search icon">
                </i>
            </div>
        </div>
            <h3>
                Contacts <span className="ui circular label">{props.contacts.length}</span>
            </h3>
             <div style={{ borderTop: "1px solid #614949"}}>
                {renderContactList}
            </div>
        </div>
    );
};

export default ContactList;