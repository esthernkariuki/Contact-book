
let contacts = [];
document.addEventListener('DOMContentLoaded', () => {
    loadContacts();
    document.getElementById('contact-form').addEventListener('submit', addContact);
    document.getElementById('search').addEventListener('input', searchContacts);
});


function loadContacts() {
    contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    displayContacts(contacts);
}


function saveContacts() {

    localStorage.setItem('contacts', JSON.stringify(contacts));
}

/**
 * Function to handle adding a new contact
 * @param {Event} e - The event object from the form submission
 */
function addContact(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    if (name && phone && email) {
     
        const newContact = {
            id: Date.now(),
            name,
            phone,
            email
        };
        contacts.push(newContact);
        saveContacts();
        displayContacts(contacts);
        document.getElementById('contact-form').reset();
    }
}

/**
 * Function to display the list of contacts in the table
 * @param {Array} contactsToDisplay - The array of contacts to display
 */
function displayContacts(contactsToDisplay) {
   
    const tbody = document.querySelector('#contacts-table tbody');

    tbody.innerHTML = '';
    contactsToDisplay.forEach(contact => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${contact.name}</td>
            <td>${contact.phone}</td>
            <td>${contact.email}</td>
            <td class="action-buttons">
                <button class="edit" onclick="editContact(${contact.id})">Edit</button>
                <button class="delete" onclick="deleteContact(${contact.id})">Delete</button>
            </td>`;
        tbody.appendChild(row);
    });
}

/**
 * Function to edit a contact by loading its details into the form
 * @param {number} id - The ID of the contact to edit
 */
function editContact(id) {
    const contactToEdit = contacts.find(contact => contact.id === id);
    if (contactToEdit) {
        document.getElementById('name').value = contactToEdit.name;
        document.getElementById('phone').value = contactToEdit.phone;
        document.getElementById('email').value = contactToEdit.email;
        deleteContact(id);
    }
}

/**
 * Function to delete a contact from the list
 * @param {number} id - The ID of the contact to delete
 */
function deleteContact(id) {
    contacts = contacts.filter(contact => contact.id !== id);
    saveContacts();

    displayContacts(contacts);
}


function searchContacts() {
    const query = document.getElementById('search').value.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(query) ||
        contact.phone.toLowerCase().includes(query) ||
        contact.email.toLowerCase().includes(query)
    );
    displayContacts(filteredContacts);
}