import { Loader } from 'components/Loader/Loader';
import list from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/contactsOperations';
import {
  selectFilteredContacts,
  selectLoading,
  selectError,
  selectFilter,
  selectContacts,
} from 'redux/selector';
import { useEffect } from 'react';

export const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const onDeleteContacts = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      {isLoading && <Loader />}
      {isError && <p>{isError}</p>}
      <ul className={list.list}>
        {getFilteredContacts.map(({ id, name, number }) => (
          <li className={list.listItem} key={id}>
            <p className={list.listPrg}>
              {name}: {number}
            </p>
            <button
              className={list.listBtn}
              type="submit"
              onClick={() => onDeleteContacts(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
