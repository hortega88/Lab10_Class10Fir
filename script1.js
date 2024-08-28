//dynamic background color change
const color = ["#ff9999", "#66b3ff", "#ff0055", "#c3c2d5", "#ffcc90"];
let index = 0;

setInterval(() => {
  document.body.style.backgroundColor = color[index];
  index = index + 1;
}, 5000);

///Contact list Predefined

let contacts = [
  { name: "Maxwell Wright", phone: "019171916495", email: "contact1@cctb.com" },
  { name: "Raja Villarreal", phone: "0863982895", email: "contact2@cctb.com" },
  { name: "Helen Richards", phone: "080031111", email: "contact3@cctb.edu" },
];

///Clic Events
document.getElementById("addNewContactBtn").addEventListener("click", () => {
  const name = prompt("Enter contact name:");
  const phone = prompt("Enter contact phone number:");
  const email = prompt("Enter contact email:");

  if (name !== "" && phone !== "" && email !== "") {
    contacts.push({ name, phone, email });
    alert("Contact added successfully!");
  } else {
    alert("Invalid input. Please try again.");
  }
});

document.getElementById("findContactsBtn").addEventListener("click", () => {
  const searchName = prompt("Enter the name of the contact to find:");
  const contact = contacts.find(
    (contact) => contact.name.toLowerCase() === searchName.toLowerCase()
  );

  if (contact) {
    alert(
      `Name: ${contact.name}\nPhone: ${contact.phone}\nEmail: ${contact.email}`
    );
    console.log(
      `Name: ${contact.name}\nPhone: ${contact.phone}\nEmail: ${contact.email}`
    );
  } else {
    alert("Contact not found.");
  }
});

document.getElementById("updateContactBtn").addEventListener("click", () => {
  const contactsList = document.getElementById("contacts");
  contactsList.innerHTML = "";

  contacts.forEach((contact) => {
    const li = document.createElement("li");
    li.textContent = `${contact.name} / ${contact.phone} / ${contact.email}`;
    contactsList.appendChild(li);
  });
});

// SetInterval for logging contact count
setInterval(() => {
  console.log(`Total contacts: ${contacts.length}`);
}, 5000);

// SetTimeout for a delayed action
setTimeout(() => {
  console.log("This is a delayed message");
}, 3000);
