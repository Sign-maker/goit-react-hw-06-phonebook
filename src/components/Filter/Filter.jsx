import { useFilter } from 'hooks/useFilter';
import { Input, Label } from './Filter.styled';

export const Filter = () => {
  const { filterValue, setFilter } = useFilter();

  const handleChange = event => {
    const value = event.target.value.trimStart();
    setFilter(value);
  };

  return (
    <Label>
      Filter contacts by name
      <Input type="text" value={filterValue} onChange={handleChange} />
    </Label>
  );
};
