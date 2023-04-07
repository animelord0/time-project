let count = 0;
const btn = document.querySelectorAll(".btn");
const value = document.querySelector("#value");

console.log(btn);
btn.forEach((btns) => {
  btns.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("Decrease")) {
      count--;
    } else if (styles.contains("Increase")) {
      count++;
    } else if (styles.contains("reset")) {
      count = 0;
    }
    if (count < 0) {
      value.style.color = "red";
    } else if (count > 0) {
      value.style.color = "green";
    } else {
      value.style.color = "black";
    }
    value.innerText = count;
  });
});
