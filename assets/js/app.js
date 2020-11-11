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
  }else if (num1 && true) {
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
  }else if (emoji1 && true) {
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
  }else if (special1 && true) {
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



document.getElementById('test').addEventListener('click', function () {
  // Temporary password for testing
  var passwordTest = "GxVbares1000"

  // add to the event of clicking the test button


  // fetch request
  const corsAll = "https://cors-anywhere.herokuapp.com/"

  fetch(corsAll + `https://password-check-api.herokuapp.com/check/${passwordTest}`)
    .then(res => res.json())
    .then(function (dataPassword) {
      console.log(dataPassword)
      var passScore = dataPassword.passed
      console.log(passScore)
      console.log(`Your password is rated ${passScore} out of 5`)
      // if password score is between 0 & 2 turn background Red
      if (passScore >= 0 && passScore < 2) {
        document.querySelector("#password-strength-bar").style.border = "thin solid #000000"
        document.querySelector("#password-bar").style.background = "red";
        document.querySelector("#password-bar").style.border = "thin solid #000000"
        document.querySelector("#password-bar").style.width = "33%";
        document.querySelector("#password-bar").textContent = "Low Strength"
      }
      // if password score is between 2 & 3 turn background Yellow#password-bar
      if (passScore >= 2 && passScore < 4) {
        document.querySelector("#password-strength-bar").style.border = "thin solid #000000"
        document.querySelector("#password-bar").style.background = "yellow";
        document.querySelector("#password-bar").style.border = " thin solid #000000"
        document.querySelector("#password-bar").style.width = "66%";
        document.querySelector("#password-bar").textContent = "Medium Strength"
      }
      // if password score is between 4 & 5 turn background Green
      if (passScore >= 4 && passScore < 5) {
        document.querySelector("#password-strength-bar").style.border = "thin solid #000000"
        document.querySelector("#password-bar").style.background = "green";
        document.querySelector("#password-bar").style.border = " thin solid #000000"
        document.querySelector("#password-bar").style.width = "100%";
        document.querySelector("#password-bar").textContent = "High Strength"

      }
    })



    // Catch any Error from the API
    .catch(err => {
      console.error(err);
    })
})


