import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ContactListItem from '../ContactListItem/ContactListItem';
import contactsSelectors from '../../Redux/contacts/contacts-selectors';
import styles from './ContactList.module.css';

const ContactList = ({ contacts }) => (
  <ul className={styles.contact_list}>
    {contacts.map(({ name, number, id }) => (
      <ContactListItem name={name} number={number} key={id} id={id} />
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

const mapStateToProps = state => ({
  contacts: contactsSelectors.getVisibleContacts(state),
});

export default connect(mapStateToProps)(ContactList);
