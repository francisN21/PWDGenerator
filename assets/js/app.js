// temporary arrays so we can see results for password
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let emojis = ["😢", "💕", "🥺", "😉", "🥱", "😍", "😒", "xD"];
let specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
// api fetched arrays


// placeholder for the chosen category
let possibles = [];



// event listener to push to array 
// Number button
document.getElementById('num').addEventListener('click', function () {
  let pOut = `<button class="button is-small is-info is-rounded" id="numX">num</button>`;
  possibles.push(num);
  console.log(possibles);
  
    document.getElementById("preset-Out").innerHTML += pOut;
    this.disabled = true;
    
});
// emoji button
document.getElementById('emoji').addEventListener('click', function () {
  let pOut = `<button class="button is-info is-small is-rounded" id="emojiX">emoji</button>`;
  possibles.push(emojis);
  console.log(possibles);
  
    document.getElementById("preset-Out").innerHTML += pOut;
    this.disabled = true;
    
  
});
// specialC Button
document.getElementById('special').addEventListener('click', function () {
  let pOut = `<button class="button is-info is-small is-rounded" id="special">special</button>`;
  possibles.push(specialChar);
  console.log(possibles);
  
    document.getElementById("preset-Out").innerHTML += pOut;
    this.disabled = true;

    
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
  // set all selections to false
  num1 = false;
  emoji1 = false;
  special1 = false;
  words1 = false;
  noun1 = false;
  verb1 = false;
  adj1 = false;

  // clear's out the Buttons selected innerHTML
  document.querySelector("#preset-Out").innerHTML = pOut
  // Clear's out local storage
  localStorage.setItem("save", possibles);
  // Clear's out the password box text content
  document.querySelector("#pwd").textContent = ""
  // set local storage to of buttons to false
  localStorage.setItem("numbers", num1)
  localStorage.setItem("emojis", emoji1)
  localStorage.setItem("special", special1)
  localStorage.setItem("words", words1)
  localStorage.setItem("nouns", noun1)
  localStorage.setItem("verbs", verb1)
  localStorage.setItem("adjectives", adj1)


//  Makes all the buttons in Options selectable again. Doesn't check if any 
// were disabled
  document.getElementById('special').disabled = false;
  document.getElementById('num').disabled = false;
  document.getElementById('emoji').disabled = false;
  document.getElementById('words').disabled = false;
  document.getElementById('adjective').disabled = false;
  document.getElementById('noun').disabled = false;
  document.getElementById('verb').disabled = false;

})

// Save Button on Click Event to save the buttons selected and the password picked
document.getElementById('save').addEventListener('click', function () {
  // Saves possibles to local Storage
  localStorage.setItem("save", possibles);

  // set local storage to save the buttons pressed)
  localStorage.setItem("numbers", num1)
  localStorage.setItem("emojis", emoji1)
  localStorage.setItem("special", special1)
  localStorage.setItem("words", words1)
  localStorage.setItem("adjectives", adj1)
  localStorage.setItem("nouns", noun1)
  localStorage.setItem("verbs", verb1)

})