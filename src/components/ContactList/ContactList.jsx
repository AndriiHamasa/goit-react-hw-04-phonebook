import { Li, Btn } from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <Li key={contact.id}>
          {contact.name}: {contact.number}
          <Btn id={contact.id} onClick={onDelete}>
            Delete
          </Btn>
        </Li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.node,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
