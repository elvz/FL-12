// Your code goes here
const email = prompt('Enter Your Email');
const minValueOfEmail = 5;
const minValueOfPass = 6;
const userMail = 'user@gmail.com';
const adminMail = 'admin@gmail.com';
const userPass = 'UserPass';
const adminPass = 'AdminPass';

let newPass = '';

function checkLogin() {
  if (email === '' || !email) {
    alert('Canceled');
  } else if (email.length < minValueOfEmail) {
    alert(`I don't know any emails having name length less than 5 symbols`);
  } else if (email === userMail || email === adminMail) {
    checkPassword();
  } else {
    alert(`I don't know you`);
  }
}

function checkPassword() {
  let password = prompt('Enter Your Password');

  if (password === '' || !password) {
    alert('Canceled');
  } else if (email === userMail && password === userPass) {
    askChangePassword();
  } else if (email === adminMail && password === adminPass) {
    askChangePassword();
  } else {
    alert('Wrong Password');
  }
}

function askChangePassword() {
  let changePass = confirm('Would You like to change password?');

  if (changePass === true) {
    changePassword();
  } else {
    alert('You have failed the change.');
  }
}

function changePassword() {
  let oldPass = prompt('Enter old password');

  if (oldPass === '' || !oldPass) {
    alert('Canceled');
  } else if (email === userMail && oldPass === userPass) {
    newPassword();
  } else if (email === adminMail && oldPass === adminPass) {
    newPassword();
  }
}

function newPassword() {
  newPass = prompt('Enter new password');

  if (newPass === '' || !newPass) {
    alert('Canceled');
  } else if (newPass.length < minValueOfPass) {
    alert(`It's too short`);
  } else {
    confirmPassword();
  }
}

function confirmPassword() {
  let confirmPass = prompt('Re-enter new password again');

  if (confirmPass === newPass) {
    alert('Success!');
  }
}

checkLogin();
