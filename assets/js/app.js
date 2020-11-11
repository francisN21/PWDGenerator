const el = document.querySelector("#module");

el.addEventListener("mousemove", (e) => {
  el.style.backgroundPositionX = -e.offsetX + "px";
  el.style.backgroundPositionY = -e.offsetY + "px";
});

// temporary arrays so we can see results for password
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let emojis = ["😢", "💕", "🥺", "😉", "🥱", "😍", "😒", ""];
let specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
// api fetched arrays
let wordBank = [];
let nounBank = [];
let adjBank = [];
let verb = [];

// placeholder for the chosen category
let possibles = [];

// add here
let num1 = false;
let emoji1 = false;
let special1 = false;
let words1 = false;




// event listener to push to array 
// Number button
document.getElementById('num').addEventListener('click', function () {
  let pOut = `<button class="button is-small is-info is-rounded" id="numX">num</button>`;
  possibles.push(num);
  console.log(possibles);
  if (num1 == false) {
    document.getElementById("preset-Out").innerHTML += pOut;
    num1 = true;
  }
});
// emoji button
document.getElementById('emoji').addEventListener('click', function () {
  let pOut = `<button class="button is-info is-small is-rounded" id="emojiX">emoji</button>`;
  possibles.push(emojis);
  console.log(possibles);
  if (emoji1 == false) {
    document.getElementById("preset-Out").innerHTML += pOut;
    emoji1 = true;
  }
});
// specialC Button
document.getElementById('special').addEventListener('click', function () {
  let pOut = `<button class="button is-info is-small is-rounded" id="special">special</button>`;
  possibles.push(specialChar);
  console.log(possibles);
  if (special1 == false) {
    document.getElementById("preset-Out").innerHTML += pOut;

    special1 = true;
  }
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

// console.log(pw);


// Event listener to generate random word when words button is clicked
// document.getElementById('words').addEventListener('click', function () {

//   fetch("https://wordsapiv1.p.rapidapi.com/words/?random=true", {
//     method: "GET",
//     redirect: "follow",
//     cache: "reload",
//     headers: {
//       "x-rapidapi-key": "e2ade1d70fmshb66883d53854717p17f9bejsn92e2ff768b21",
//       "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
//     }
//   })
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       var randomWord = data.word
//       // console log the generated word
//       console.log(`Random Generated Word: ${randomWord}`)
//       possibles.push(randomWord)


      // put the word into the box
      // document.getElementById("pwd").innerHTML = data.word;


      // Fetch request to find the word's rhyme

      // fetch(`https://wordsapiv1.p.rapidapi.com/words/${randomWord}/rhymes`, {
      //   method: "GET",
      //   redirect: "follow",
      //   cache: "reload",
      //   headers: {
      //     "x-rapidapi-key": "e2ade1d70fmshb66883d53854717p17f9bejsn92e2ff768b21",
      //     "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
      //   }
      // })
      //   .then(function (response) {
      //     return (response.json());
      //   })
      //   .then(function (dataRhymes) {
      //     console.log(dataRhymes.rhymes.all)
      //   })

//     })


//   // Fetch request to get a random Verb
//   fetch("https://wordsapiv1.p.rapidapi.com/words/?partOfSpeech=verb&random=true", {
//     method: "GET",
//     redirect: "follow",
//     cache: "reload",
//     headers: {
//       "x-rapidapi-key": "e2ade1d70fmshb66883d53854717p17f9bejsn92e2ff768b21",
//       "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
//     }
//   })
//     .then(function (response) {
//       return (response.json());
//     })
//     .then(function (dataVerb) {
//       var randomVerb = dataVerb.word
//       // console log the Verb word
//       console.log(`Random Generated Verb ${randomVerb}`)

//       possibles.push(randomVerb)

//     })


//   // Fetch request to get a random Noun
//   fetch("https://wordsapiv1.p.rapidapi.com/words/?partOfSpeech=noun&random=true", {
//     method: "GET",
//     redirect: "follow",
//     cache: "reload",
//     headers: {
//       "x-rapidapi-key": "e2ade1d70fmshb66883d53854717p17f9bejsn92e2ff768b21",
//       "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
//     }
//   })
//     .then(function (response) {
//       return (response.json());
//     })
//     .then(function (dataNoun) {
//       // var nounArray = dataNoun.results.data
//       // console.log(nounArray)
//       var randomNoun = dataNoun.word
//       // console log the Noun word
//       console.log(`Random Generated Noun: ${randomNoun}`)
//       possibles.push(randomNoun)
//     })

//   // Fetch request to get a random Adjective
//   fetch("https://wordsapiv1.p.rapidapi.com/words/?partOfSpeech=adjective&random=true", {
//     method: "GET",
//     redirect: "follow",
//     cache: "reload",
//     headers: {
//       "x-rapidapi-key": "e2ade1d70fmshb66883d53854717p17f9bejsn92e2ff768b21",
//       "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
//     }
//   })
//     .then(function (response) {
//       return (response.json());
//     })
//     .then(function (dataAdjective) {
//       // var adjectiveArray = dataAdjective..results.data
//       // console.log(adjectiveArray)
//       var randomAdjective = dataAdjective.word
//       // console log the Adjectives word
//       console.log(`Random Generated Adjective: ${randomAdjective}`)
//       possibles.push(randomAdjective)
//       console.log(possibles)
//     })
// })


