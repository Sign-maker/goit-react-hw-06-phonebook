import React from 'react';
import { Input, Label } from './Filter.styled';
import { nanoid } from 'nanoid';
import { useRef } from 'react';
// const filterInputId = nanoid();

export const Filter = ({ value, onFilterChange }) => {
  const { current: filterInputId } = useRef(nanoid());

  const handleChange = event => {
    onFilterChange(event.target.value.trimStart());
  };

  return (
    <Label htmlFor={filterInputId}>
      Filter contacts by name
      <Input
        id={filterInputId}
        type="text"
        value={value}
        onChange={handleChange}
      />
    </Label>
  );
};
