contacts = []

def add_contact():
    name = input("Enter name: ")
    phone = input("Enter phone: ")
    email = input("Enter email: ")
    contacts.append({'name': name, 'phone': phone, 'email': email})
    print("Contact added!\n")

def show_contacts():
    if not contacts:
        print("No contacts found.\n")
        return
    for i, c in enumerate(contacts):
        print(f"{i+1}. {c['name']} | {c['phone']} | {c['email']}")
    print()

def edit_contact():
    show_contacts()
    idx = int(input("Enter contact number to edit: ")) - 1
    if 0 <= idx < len(contacts):
        contacts[idx]['name'] = input("Enter new name: ")
        contacts[idx]['phone'] = input("Enter new phone: ")
        contacts[idx]['email'] = input("Enter new email: ")
        print("Contact updated!\n")
    else:
        print("Invalid contact number.\n")

def delete_contact():
    show_contacts()
    idx = int(input("Enter contact number to delete: ")) - 1
    if 0 <= idx < len(contacts):
        contacts.pop(idx)
        print("Contact deleted!\n")
    else:
        print("Invalid contact number.\n")

while True:
    print("1. Add Contact")
    print("2. Show Contacts")
    print("3. Edit Contact")
    print("4. Delete Contact")
    print("5. Exit")
    choice = input("Choose an option: ")
    if choice == '1':
        add_contact()
    elif choice == '2':
        show_contacts()
    elif choice == '3':
        edit_contact()
    elif choice == '4':
        delete_contact()
    elif choice == '5':
        break
    else:
        print("Invalid choice.\n")