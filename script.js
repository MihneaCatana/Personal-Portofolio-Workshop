function submitForm(event) {
  const username = document.getElementById("name-input").value;
  const email = document.getElementById("email-input").value;
  const message = document.getElementById("message-input").value;
  event.preventDefault();
  alert(
    `Thank you for reaching out! I will get back to you soon. \n Username: ${username} \n Email: ${email} \n Message: ${message} \n`
  );
}
