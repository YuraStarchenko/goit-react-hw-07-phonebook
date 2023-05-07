import { Input } from './Filter.styled.js';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice.jsx';
import { selectFilter } from 'redux/selectors';


export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterContact = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <Input
      type="text"
      value={filter}
      placeholder="Enter a search name"
      onChange={handleFilterContact}
    />
  );
};