const originalText = `
HELLO
`;

function shuffleText(text) {
  const regex = /^[a-zA-Z0-9öÖçÇşŞİığĞüÜ.!?&%#-()/:"]$/;
  const array = text.split("");

  for (let i = array.length; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    if (!regex.test(array[j])) j = Math.floor(Math.random() * (i + 1));
    if (regex.test(array[i]) && regex.test(array[j]))
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array.join("");
}

document.getElementById("paragraph").innerText = shuffleText(originalText);

function fixParagraph() {
  document.getElementById("paragraph").innerText = originalText;
}

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
      //window.location.href = '/pages/about/about.html';
      fixParagraph();
    } else {
      alert("Incorrect username or password");
    }
  });
