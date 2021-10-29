const contactsOperations = require("./contacts");

const { Command } = require("commander");
const program = new Command();

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      return await contactsOperations.getListOfContacts();

    case "get":
      const contact = await contactsOperations.getContactById(id);
      console.log(contact);
      return contact;

    case "add":
      const newContact = await contactsOperations.addContact({
        name,
        email,
        phone,
      });
      console.log(newContact);
      return newContact;

    case "remove":
      const deletedContatct = await contactsOperations.deleteContactById(id);
      console.log(deletedContatct);
      return deletedContatct;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
