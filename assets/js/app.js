// temporary arrays so we can see results for password
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let emojis = ["😢", "💕", "🥺", "😉", "🥱", "😍", "😒", "xD"];
let specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
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

// event listener to push to array 
// Number button
document.getElementById('num').addEventListener('click', function () {
  let pOut = `<button class="button is-small is-info is-rounded" id="numX">num</button>`;
  possibles.push(num);
  console.log(possibles);
  if (num1 == false) {
    document.getElementById("preset-Out").innerHTML += pOut;
    num1 = true;
  } else if (num1 && true) {
    document.getElementById("preset-Out").innerHTML += pOut;
    num1 += true;
  };
});
// emoji button
document.getElementById('emoji').addEventListener('click', function () {
  let pOut = `<button class="button is-info is-small is-rounded" id="emojiX">emoji</button>`;
  possibles.push(emojis);
  console.log(possibles);
  if (emoji1 == false) {
    document.getElementById("preset-Out").innerHTML += pOut;
    emoji1 = true;
  } else if (emoji1 && true) {
    document.getElementById("preset-Out").innerHTML += pOut;
    emoji1 += true;
  };
});
// specialC Button
document.getElementById('special').addEventListener('click', function () {
  let pOut = `<button class="button is-info is-small is-rounded" id="special">special</button>`;
  possibles.push(specialChar);
  console.log(possibles);
  if (special1 == false) {
    document.getElementById("preset-Out").innerHTML += pOut;

    special1 = true;
  } else if (special1 && true) {
    document.getElementById("preset-Out").innerHTML += pOut;
    special1 += true;
  };
});



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
  var possibles = []
  var pOut = []
  // clear's out the Buttons selected innerHTML
  document.querySelector("#preset-Out").innerHTML = pOut
  // Clear's out local storage
  localStorage.setItem("save", possibles);
  // Clear's out the password box text content
  document.querySelector("#pwd").textContent = ""
  // set local storage selections back to false
  localStorage.setItem("numbers", "false")
  localStorage.setItem("emojis", "false")
  localStorage.setItem("special", "false")
  localStorage.setItem("words", "false")
  // localStorage.setItem("adjectives", "")
  // localStorage.setItem("nouns", "")
  // localStorage.setItem("verbs", "")
})