import { useDispatch, useSelector } from 'react-redux';
import { Input, Label } from './Filter.styled';
import { setFilter } from 'redux-store/filter/filterSlice';
import { selectFilter } from 'redux-store/filter/filterSelectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);

  const handleChange = event => {
    const value = event.target.value.trimStart();
    dispatch(setFilter(value));
  };

  return (
    <Label>
      Filter contacts by name
      <Input type="text" value={filterValue} onChange={handleChange} />
    </Label>
  );
};
