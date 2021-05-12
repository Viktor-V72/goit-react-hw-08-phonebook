import React from 'react';
import { connect } from 'react-redux';
import ContactForm from '../Components/ContactForm/ContactForm';
import ContactList from '../Components/ContactList/ContactList';
import Filter from '../Components/Filter/Filter';
import contactsOperations from '../Redux/contacts/contacts-operations';
import contactsSelectors from '../Redux/contacts/contacts-selectors';

class ContactsView extends React.Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <ContactForm />

        <h2>Contacts</h2>

        <Filter />
        {this.props.isLoadingContacts && <h3>Loading...</h3>}
        <ContactList />
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
