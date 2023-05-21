import { Head, Input, Label } from "./Filter.styled";
import PropTypes from 'prop-types';

export const Filter = ({contacts, onChange}) => {
  return (
    <>
      <Head>Find contacts by name</Head>
      <Label htmlFor="filter">
        <Input
          id="filter"
          type="text"
          name="filter"
          value={contacts.filter}
          onChange={onChange}
        />
      </Label>
    </>
  );
}

Filter.propTypes = {
  contacts: PropTypes.shape({
    contacts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.node,
    })),
    filter: PropTypes.string.isRequired,
  }),
  onChange: PropTypes.func.isRequired,
}

