import css from "../Contact/Contact.module.css";
import PropTypes from 'prop-types'

import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contact }) => {
  console.dir(contact);

  const dispatch = useDispatch();
  const handleDelete = () => {
      dispatch(deleteContact(contact.id));
      
    };
    

  return (
    <li className={css["contact-item"]}>
      <div className={css["contact-box"]}>
        <span className={css["contact-name"]}>{contact.name}</span>
        <span className={css["contact-number"]}>tel. {contact.number}</span>
      </div>
      <button className={css["button-delete"]} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};



export default Contact;
