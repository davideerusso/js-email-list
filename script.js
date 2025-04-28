const apiUri = `https://flynn.boolean.careers/exercises/api/random/mail `;
const emailListEl = document.getElementById("email-list");

let generateEmail = [];

for (let i = 0; i < 10; i++) {
  axios.get(apiUri).then((response) => {
    const email = response.data.response;
    generateEmail.push(email);
    emailListEl.innerHTML += `<li>${email}</li>`;
  });
}
