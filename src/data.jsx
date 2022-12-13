var contact = [];
// {
//     id: 0,
//     name: "jeet",
//     phone: "88898",
//     type: "personal",
//     isWhatsApp: true,
//     profilePicture: "",
//   },
//   {
//     id: 1,
//     name: "Meet",
//     phone: "782845",
//     type: "office",
//     isWhatsApp: false,
//     profilePicture: "",
//   },
export let contactDetails = [];
if (localStorage.getItem("allcontact") === null)
  localStorage.setItem("allcontact", JSON.stringify(contact));

contactDetails = JSON.parse(localStorage.getItem("allcontact"));
