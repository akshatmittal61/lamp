const body = document.querySelector("body");
const Switch = document.querySelector(".switch");
const bulb = document.querySelector(".bulb");
const light = document.querySelector(".light");

Switch.addEventListener("click", () => {
	if (!Switch.checked) {
		body.style.backgroundColor = "var(--dark)";
		body.style.color = "var(--light)";
		bulb.style.backgroundColor = "var(--black)";
		light.classList.remove("light-up");
	} else {
		body.style.backgroundColor = "var(--light)";
		body.style.color = "var(--dark)";
		bulb.style.backgroundColor = "var(--yellow)";
		light.classList.add("light-up");
	}
});
