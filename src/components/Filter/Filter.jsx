import formFiter from '../ContactForm/ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selector';
export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onFilter = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <input
      className={formFiter.formInput}
      type="text"
      name="filter"
      onChange={onFilter}
      value={filter}
    />
  );
};
