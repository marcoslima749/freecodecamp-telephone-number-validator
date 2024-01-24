const userInput = document.getElementById("user-input");
const results = document.getElementById("results-div");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const form = document.getElementById("form");

const appendResult = res => {
  const p  = document.createElement("p");
  p.textContent = res;
  p.className = "ptag";
  results.appendChild(p);
};

const clear = () => {
  results.innerHTML = "";
}

const numberRegex = /^1?\s?(\(\d{3}\)|\d{3})\s?-?\d{3}\s?-?\d{4}$/i

const isValid = number => numberRegex.test(number);

const check = () => {
  const rawValue = userInput.value;
  if(rawValue === "") {
    alert("Please provide a phone number");
    return;
  }
  const value = rawValue.trim();
  appendResult(isValid(value) ? "Valid US number: " + value : "Invalid US number: " + value );
  userInput.value = "";
}


form.addEventListener("submit",(event)=>{
event.preventDefault();
check();
})
checkButton.addEventListener("click",check);
clearButton.addEventListener("click",clear)