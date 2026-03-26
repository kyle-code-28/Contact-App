import { createContext, useContext, useState } from "react";
import api from '../api/contacts';

const contactsCrudContext = createContext();

export function ContactsCrudContextProvider ({children}) {
    const [contacts, setContacts] = useState ([]);

    //RetrieveContacts
  const retrieveContacts = async () => {
    const response = await api.get("/contacts"); //this function calls the api
    if(response.data) setContacts(response.data); 
};
    const value = {
        contacts,
        retrieveContacts
    }
    
    return <contactsCrudContext.Provider value= {value}>
        {children}
    </contactsCrudContext.Provider>

}

export function useContactsCrud () {
    return useContext(contactsCrudContext);
}