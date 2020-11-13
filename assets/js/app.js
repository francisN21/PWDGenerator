// temporary arrays so we can see results for password
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let emojis = ["😢", "💕", "🥺", "😉", "🥱", "😍", "😒", "🤬"];
let specialChar = ["!", "#", "$", "%", "&", "'", "*", "+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "^", "_", "|", "~"];
// api fetched arrays
// placeholder for the chosen category
let possibles = [];
// add here
let num1 = false;
let emoji1 = false;
let special1 = false;
let words1 = false;
let noun1 = false;
let verb1 = false;
let adj1 = false;
// placeholder for the generated password
let pw = [];
// generate fetches the possibles array to create the password
// lvl1 password generator - will add more complexity as it goes
document.getElementById('generate').addEventListener('click', function () {
  let ans = possibles;


  console.log("Generated password: " + ans)
  for (let x = 0; x < ans.length; x++) {
    let rand = Math.floor(Math.random() * ans[x].length);
    pw += possibles[x][rand];
    console.log(possibles)
  }
  document.getElementById("pwd").innerHTML = pw;
});
// Clear Button on Click Event to clear the buttons selected and the password picked
document.getElementById('reset').addEventListener('click', function () {
  // sets variables back to empty Array's
  possibles = [];
  var pOut = [];
  pw = [];
  // set all selections to false for local Storage
  num1 = false;
  emoji1 = false;
  special1 = false;
  words1 = false;
  noun1 = false;
  verb1 = false;
  adj1 = false;
  // clear's out the Buttons selected innerHTML
  document.querySelector("#preset-Out").innerHTML = pOut;
  // Clear's out local storage
  localStorage.setItem("save", possibles);
  // Clear's out the password box text content
  document.querySelector("#pwd").textContent = "";
  // set local storage to of buttons to false
  localStorage.setItem("numbers", num1);
  localStorage.setItem("emojis", emoji1);
  localStorage.setItem("special", special1);
  localStorage.setItem("words", words1);
  localStorage.setItem("nouns", noun1);
  localStorage.setItem("verbs", verb1);
  localStorage.setItem("adjectives", adj1);
  localStorage.setItem("possibles", possibles);
  //  Makes all the buttons in Options selectable again. Doesn't check if any 
  // were disabled
  document.getElementById('special').disabled = false;
  document.getElementById('num').disabled = false;
  document.getElementById('emoji').disabled = false;
  document.getElementById('words').disabled = false;
  document.getElementById('adjective').disabled = false;
  document.getElementById('noun').disabled = false;
  document.getElementById('verb').disabled = false;
  // Removes the bottom password strength bar left over from previous run
  // There is another way to set the attributes using this.setAttribute but I used this way
  document.querySelector("#password-bar").innerHTML = "";
  document.querySelector("#password-bar").style = "";
  document.querySelector("#password-strength-bar").style = "";
})
// Save Button on Click Event to save the buttons selected and the password picked
document.getElementById('save').addEventListener('click', function () {
  // Saves possibles to local Storage
  localStorage.setItem("possibles", possibles);
  // Save generated Password to localStorage 
  localStorage.setItem("save", pw);
  // set local storage to save the buttons pressed);
  localStorage.setItem("numbers", num1);
  localStorage.setItem("emojis", emoji1);
  localStorage.setItem("special", special1);
  localStorage.setItem("words", words1);
  localStorage.setItem("adjectives", adj1);
  localStorage.setItem("nouns", noun1);
  localStorage.setItem("verbs", verb1);
});



