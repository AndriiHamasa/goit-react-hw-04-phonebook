import { Head, Input, Label } from "./Filter.styled";
import PropTypes from 'prop-types';

export const Filter = ({filter, onChange}) => {
  return (
    <>
      <Head>Find contacts by name</Head>
      <Label htmlFor="filter">
        <Input
          id="filter"
          type="text"
          name="filter"
          value={filter}
          onChange={onChange}
        />
      </Label>
    </>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

