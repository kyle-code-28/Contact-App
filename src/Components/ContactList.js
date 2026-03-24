import React from "react";
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
            <h3>
                Contacts <span className="ui circular label">{props.contacts.length}</span>
            </h3>
            <div className="ui celled list">
                {renderContactList}
            </div>
        </div>
    );
};

export default ContactList;