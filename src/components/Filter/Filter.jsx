import { Input } from './Filter.styled.js';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice.jsx';
import { selectFilter } from 'redux/selectors';


export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);

  return (
    <Input
      type="text"
      name="filter"
      title="Filter"
      onChange={e => dispatch(setFilter(e.target.value))}
      value={value}
    />
  );
};