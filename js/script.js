document.addEventListener("DOMContentLoaded", function () {
  const entryButton = document.getElementById("entrybutton");
  const entryInput = document.getElementById("entryinput");
  const textOutput = document.getElementById("textoutput");

  entryButton.addEventListener("click", function () {
    const inputText = entryInput.value;

    alert("Vaughn Zamudio: " + inputText);
    textOutput.textContent = inputText;
  });
});

