import * as Contacts from 'expo-contacts';

async function getContacts() {
    const { status } = await Contacts.requestPermissionsAsync();
    if (!status) {
      return;
    }



      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
      });

      return data
    } 


async function addContact(name, phone_no) {
try {
    const { status } = await Contacts.requestPermissionsAsync();
    if (!status) {
      return;
    }
    console.log(name, phone_no);
    await Contacts.addContactAsync({[Contacts.Fields.FirstName]: name, [Contacts.Fields.PhoneNumbers]: [{number: phone_no}]});
    return True
}

catch (error) {
    console.log(error);
    return False
}
}


export { getContacts, addContact }