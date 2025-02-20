function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  if (hours > 12) {
    hours -= 12;
  } else if (hours === 0) {
    hours = 12;
  }
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
  document.getElementById("ampm").textContent = ampm;
}
setInterval(updateClock, 1000);
updateClock();
const toggle = document.getElementById("dark");
const body = document.body;
const heading = document.querySelector("h1");
const time = document.querySelector(".container");
toggle.addEventListener("click", function () {
  this.classList.toggle("dark");

  if (this.classList.contains("dark")) {
    body.style.background =
      "linear-gradient(to bottom right, #1a202c, #4a5568, #2d3748)";
    heading.style.color = "#bfe1ff";
    time.style.color = "#bfe1ff";
    body.style.transition = "6.5s ease-in-out";
    time.style.transition = "6.5s ease-in-out";
  } else {
    body.style.background = "";
    heading.style.color = "";
    time.style.color = "";
  }
});