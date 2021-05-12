import PropTypes from 'prop-types';
import styles from './ContactListItem.module.css';
import { connect } from 'react-redux';
import contactsOperations from '../../Redux/contacts/contacts-operations';

const ContactListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={styles.item}>
      <p className={styles.contact}>
        {name}: {number}
      </p>
      <button
        className={styles.button}
        onClick={() => onDeleteContact(id)}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(null, mapDispatchToProps)(ContactListItem);
