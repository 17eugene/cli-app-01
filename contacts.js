const getListOfContacts = require("./contactsOperations/getAllContacts");
const getContactById = require("./contactsOperations/getContactById");
const addContact = require("./contactsOperations/addContact");
const deleteContactById = require("./contactsOperations/deleteContact");

module.exports = {
  getListOfContacts,
  getContactById,
  addContact,
  deleteContactById,
};
