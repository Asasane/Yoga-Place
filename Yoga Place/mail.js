const firebaseConfig = {
    apiKey: "AIzaSyDVa0mZZZXoAKk587kTECOiFYBthbvETbo",
    authDomain: "yogacontact-1367e.firebaseapp.com",
    databaseURL: "https://yogacontact-1367e-default-rtdb.firebaseio.com",
    projectId: "yogacontact-1367e",
    storageBucket: "yogacontact-1367e.appspot.com",
    messagingSenderId: "901011981595",
    appId: "1:901011981595:web:67f9ea09c316f21265bfbe",
    measurementId: "G-Y5TDD3BXDZ"
  };

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};