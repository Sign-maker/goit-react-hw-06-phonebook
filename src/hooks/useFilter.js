import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux-store/filter/filterSelectors';
import * as actions from 'redux-store/filter/filterSlice';

export const useFilter = () => {
  const dispatch = useDispatch();

  const filterValue = useSelector(selectFilter);
  const setFilter = filterQuery => dispatch(actions.setFilter(filterQuery));

  return { filterValue, setFilter };
};
