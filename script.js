// SHOW WELCOME USERNAME
window.onload = () => {
  const username = localStorage.getItem("username");
  if (username) {
    document.getElementById("welcomeText").innerText = `Welcome, ${username} 💕`;
  }
};

function like(btn) {
  const span = btn.querySelector("span");
  span.innerText = Number(span.innerText) + 1;
}

function toggleComment(btn) {
  btn.parentElement.nextElementSibling.style.display = "block";
}

function submitSurvey() {
  if (!q1.value || !q2.value || !q3.value || !q4.value || !q5.value) {
    alert("Please answer all questions 💕");
    return;
  }

  summary.innerHTML = `
    <p><b>First Valentine:</b> ${q1.value}</p>
    <p><b>Anniversary:</b> ${q2.value}</p>
    <p><b>Favorite Memory:</b> ${q3.value}</p>
    <p><b>First Date:</b> ${q4.value}</p>
    <p><b>Favorite Thing:</b> ${q5.value}</p>
  `;

  popup.style.display = "flex";
}

function showValentine() {
  popup.style.display = "none";
  valentine.style.display = "flex";
}

function yesAnswer() {
  document.getElementById("answerResult").innerHTML =
    "You just made me the happiest person alive 💖💖💖";
}

function runAway() {
  const btn = document.getElementById("noBtn");

  const maxX = window.innerWidth - btn.offsetWidth - 20;
  const maxY = window.innerHeight - btn.offsetHeight - 20;

  btn.style.position = "fixed";
  btn.style.left = Math.random() * maxX + "px";
  btn.style.top = Math.random() * maxY + "px";
}

