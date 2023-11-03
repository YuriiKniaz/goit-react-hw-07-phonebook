import list from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selector';
export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const onDeleteContacts = id => {
    dispatch(deleteContact(id));
  };

  const getFilteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={list.list}>
      {getFilteredContacts.map(({ id, name, number }) => (
        <li className={list.listItem} key={id}>
          <p className={list.listPrg}>
            {name}: {number}
          </p>
          <button
            className={list.listBtn}
            type="submit"
            onClick={onDeleteContacts}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

//
