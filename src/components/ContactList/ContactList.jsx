import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";

import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const filterName = useSelector(selectNameFilter)

    const filterContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filterName.toLowerCase()));


  return (
    <ul className={css["contact-list"]}>
      {filterContacts.map((contact) => (
        <Contact contact={contact} key={contact.id} />
      ))}
    </ul>
  );
};



export default ContactList;
