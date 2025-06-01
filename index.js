
let contacts = [];
let editIndex = null;

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;

        if (editIndex === null) {
            
            contacts.push({ name, phone, email });
        } else {
            contacts[editIndex] = { name, phone, email };
            editIndex = null;
            document.querySelector('#contact-form button[type="submit"]').textContent = "Add";
        }
        displayContacts();
        document.getElementById('contact-form').reset();
    });
    displayContacts();
});

function displayContacts() {
    const tbody = document.querySelector('#contacts-table tbody');
    tbody.innerHTML = '';
    contacts.forEach((contact, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${contact.name}</td>
            <td>${contact.phone}</td>
            <td>${contact.email}</td>
            <td>
                <button onclick="editContact(${index})">Edit</button>
                <button onclick="deleteContact(${index})">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

window.editContact = function(index) {
    const contact = contacts[index];
    document.getElementById('name').value = contact.name;
    document.getElementById('phone').value = contact.phone;
    document.getElementById('email').value = contact.email;
    editIndex = index;
    document.querySelector('#contact-form button[type="submit"]').textContent = "Update";
};

window.deleteContact = function(index) {
    contacts.splice(index, 1);
    displayContacts();
    document.getElementById('contact-form').reset();
    editIndex = null;
    document.querySelector('#contact-form button[type="submit"]').textContent = "Add";
};

row.innerHTML = `
    <td>${contact.name}</td>
    <td>${contact.phone}</td>
    <td>${contact.email}</td>
    <td>
        <button class="edit-btn" onclick="editContact(${index})">Edit</button>
        <button class="delete-btn" onclick="deleteContact(${index})">Delete</button>
    </td>
`;