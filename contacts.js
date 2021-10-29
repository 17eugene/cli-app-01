const getListOfContacts = require("./contactsOperations/getAllContacts");
const getContactById = require("./contactsOperations/getContactById");
const addContact = require("./contactsOperations/addContact");
const deleteContactById = require("./contactsOperations/deleteContact");

// function removeContact(contactId) {
//   // ...твой код
// }

// function addContact(name, email, phone) {
//   // ...твой код
// }

module.exports = {
  getListOfContacts,
  getContactById,
  addContact,
  deleteContactById,
};
