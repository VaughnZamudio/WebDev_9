document.addEventListener("DOMContentLoaded", function () {
  // Get references to DOM elements
  const entryButton = document.getElementById("entrybutton");
  const entryInput = document.getElementById("entryinput");
  const textOutput = document.getElementById("textoutput");

  // Add event listener to the "Alert Me" button
  entryButton.addEventListener("click", function () {
    const inputText = entryInput.value;

    // Show an alert with your name and the input value
    alert("Vaughn Zamudio: " + inputText);

    // Set the h2's text to the input value
    textOutput.textContent = inputText;
  });
});

