import { nanoid } from 'nanoid';
import { Filter } from './Filter';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { useState, useEffect } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const handleChange = event => {
    setFilter(event.currentTarget.value);
  };

  const handleDelete = event => {
    const value = event.currentTarget.id;
    setContacts(prev =>
      prev.filter(contact => {
        return contact.id !== value;
      })
    );
  };

  const handleAddContact = values => {
    const { name, number } = values;

    if (
      contacts
        .map(contact => contact.name)
        .some(collectionName => collectionName === name)
    ) {
      return alert(`${name} is already in contacts`);
    }

    setContacts(prev => [
      ...prev,
      {
        id: nanoid(),
        name,
        number,
      },
    ]);
  };

  const renderContacts = () => {
    if (filter === '') {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  useEffect(() => {
    const isContacts = localStorage.getItem('contacts')
    if (isContacts) {
      setContacts(JSON.parse(isContacts))
    }
  }, [])

  useEffect(() => {
    if(contacts.length !== 0)
      localStorage.setItem('contacts', JSON.stringify(contacts))
    if (contacts.length === 0)
      try {
        localStorage.removeItem('contacts')
      } catch (error) {
        return
      }
  }, [contacts])

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div>
        <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
        <ContactForm onAddContact={handleAddContact} />

        <h2 style={{ textAlign: 'center' }}>Contacts</h2>
        <Filter filter={filter} onChange={handleChange} />
        <ContactList contacts={renderContacts()} onDelete={handleDelete} />
      </div>
    </div>
  );
};

// class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   handleChange = event => {
//     this.setState({ [event.currentTarget.name]: event.currentTarget.value });
//   };

//   handleDelete = event => {
//     this.setState({
//       contacts: this.state.contacts.filter(
//         contact => contact.id !== event.currentTarget.id
//       ),
//     });
//   };

//   handleAddContact = values => {
//     const { name, number } = values;

//     if (
//       this.state.contacts
//         .map(contact => contact.name)
//         .some(collectionName => collectionName === name)
//     ) {
//       return alert(`${name} is already in contacts`);
//     }

//     this.setState(prevState => ({
//       contacts: [
//         ...prevState.contacts,
//         {
//           id: nanoid(),
//           name: name,
//           number: number,
//         },
//       ],
//     }));
//   };

//   renderContacts = () => {
//     if (this.state.filter === '') {
//       return this.state.contacts;
//     }

//     return this.state.contacts.filter(contact =>
//       contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
//     );
//   };

//   componentDidMount() {
//     console.log('comopnentDidMount App');
//     console.log(localStorage.getItem('contacts'));
//     if (localStorage.getItem('contacts')) {
//       this.setState({ contacts: JSON.parse(localStorage.getItem('contacts')) });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log('componentDidUpdate App');

//     if (prevState.contacts.length !== this.state.contacts.length) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   render() {
//     return (
//       <div
//         style={{
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           fontSize: 40,
//           color: '#010101',
//         }}
//       >
//         <div>
//           <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
//           <ContactForm onAddContact={this.handleAddContact} />

//           <h2 style={{ textAlign: 'center' }}>Contacts</h2>
//           <Filter contacts={this.state} onChange={this.handleChange} />
//           <ContactList
//             contacts={this.renderContacts()}
//             onDelete={this.handleDelete}
//           />
//         </div>
//       </div>
//     );
//   }
// }

export default App;
