const fs = require("fs/promises");

const getAllContacts = require("./getAllContacts");
const contactsPath = require("../contactsPath");
const { constants } = require("buffer");

const deleteContactById = async (contactId) => {
  const contacts = await getAllContacts();
  const index = contacts.findIndex((contact) => contact.id === contactId);
  if (index === -1) {
    return null;
  }
  const deleteContact = contacts.splice(index, 1);

  const contactsStr = JSON.stringify(contacts);

  await fs.writeFile(contactsPath, contactsStr);
  return deleteContact;
};

module.exports = deleteContactById;
