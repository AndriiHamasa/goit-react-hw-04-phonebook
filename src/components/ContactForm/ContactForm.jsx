import css from './ContactForm.module.css'
import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({onAddContact}) => {
  

  const handleSubmit = (values, {resetForm}) => {
    onAddContact(values);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form autoComplete='off' className={css.styledForm}>
        <label htmlFor="name" className={css.styledLabel}> 
          Name
          <Field
            id="name"
            className={css.styledInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label htmlFor="number" className={css.styledLabel}> 
          Number
          <Field 
            className={css.styledInput}
            id="number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button type="submit" className={css.styledBtn}>Add contact</button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};


