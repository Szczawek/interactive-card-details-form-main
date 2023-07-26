const submit = document.querySelector("#submit");
const form = document.querySelector("form");
const sectionTwo = document.getElementById("stage-two");
const input = document.querySelectorAll("input");
input.forEach((e) =>
  e.addEventListener("change", () => {
    const elements = document.getElementById(`${e.ariaValueText}`);
    if (e.value == "" || e.checkValidity()) {
      e.classList.remove("error");
      if (e.value != "") {
        let type;
        switch (e.ariaValueText) {
          case "numer-card":
            const finall = [];
            let num = 3;
            e.value.split("").forEach((e, i) => {
              finall.push(e);
              if (i == num) {
                num += 4;
                finall.push(" ");
              }
            });
            type = finall.join("");
            break;
          case "card-month":
          case "card-year":
            e.value < 10 ? (type = `0${e.value}`) : (type = e.value);
            break;
          default:
            type = e.value.toUpperCase();
        }
        elements.textContent = type;
      }
    } else {
      e.classList.add("error");
    }
  })
);
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

submit.addEventListener("click", () => {
  if (form.checkValidity()) {
    sectionTwo.classList.remove("vanish");
    sectionTwo.classList.add("thanks");
    form.classList.add("vanish");
  }
});

document
  .getElementById("return")
  .addEventListener("click", () => location.reload());
