const el = document.querySelector("#module");

el.addEventListener("mousemove", (e) => {
  el.style.backgroundPositionX = -e.offsetX + "px";
  el.style.backgroundPositionY = -e.offsetY + "px";
});

// temporary arrays so we can see results for password
// words will be replaced by the api
// will add figures of speech
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let emojis = ["😢", "💕", "🥺", "😉", "🥱", "😍", "😒", ""];
let specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
let word1 = [];
let possibles = [];
let num1 = false;
let emoji1 = false;
let special1 = false;
let words1 = false;

// event listener to push to array 
document.getElementById('num').addEventListener('click', function () {
  let pOut = `<button class="button is-small is-info is-rounded" id="numX">num</button>`;
  possibles.push(num);
  console.log(possibles);
  if (num1 == false) {
    document.getElementById("preset-Out").innerHTML += pOut;
    num1 = true;
  }
});
document.getElementById('emoji').addEventListener('click', function () {
  let pOut = `<button class="button is-info is-small is-rounded" id="emojiX">emoji</button>`;
  possibles.push(emojis);
  console.log(possibles);
  if (emoji1 == false) {
    document.getElementById("preset-Out").innerHTML += pOut;
    emoji1 = true;
  }
});
document.getElementById('special').addEventListener('click', function () {
  let pOut = `<button class="button is-info is-small is-rounded" id="special">special</button>`;
  possibles.push(specialChar);
  console.log(possibles);
  if (special1 == false) {
    document.getElementById("preset-Out").innerHTML += pOut;

    special1 = true;
  }
});
document.getElementById('words').addEventListener('click', function () {
  // possibles.push(words);
  // console.log(possibles)
  let pOut = `<button class="button is-info is-small is-rounded" id="words">words</button>`;
  if (words1 == false) {
    document.getElementById("preset-Out").innerHTML += pOut;

    words1 = true;
  }

  let words = [];
  fetch("https://wordsapiv1.p.rapidapi.com/words/?partOfSpeech=noun&random=true", {
    method: "GET",
    redirect: "follow",
    cache: "reload",
    headers: {
      "x-rapidapi-key": "e2ade1d70fmshb66883d53854717p17f9bejsn92e2ff768b21",
      "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
    }
  })
    .then(function (response) {
      return (response.json());
    })
    .then(function (dataNoun) {
      // var nounArray = dataNoun.results.data
      // console.log("dataNoun is"  dataNoun)

      var randomN = dataNoun.word.split(" ");
      console.log("randomNoun:" + randomN)
      // console log the Noun word
      var randomNoun = randomN;
      console.log(`Random Generated Noun: ${randomNoun}`)
      words.push(randomN.join(""));
      word1.push(words);
      possibles.push(word1)
      console.log(word1)
    });
});

let pw = [];
// generate fetches the possibles array to create the password
// lvl1 password generator - will add more complexity as it goes
document.getElementById('generate').addEventListener('click', function () {
  let ans = possibles;


  console.log("this is ans:   " + ans)
  for (let i = 0; i < ans.length; i++) {
    let rand = Math.floor(Math.random() * ans[i].length);
    pw += possibles[i][rand];
    console.log(possibles)
  }
  document.getElementById("pwd").innerHTML = pw;
});



document.getElementById('test').addEventListener('click', function () {
  // Temporary password for testing
  var password = "hiFrancisco"

  // add to the event of clicking the test button
  // document.getElementById('test').addEventListener('click', function () {

  // fetch request
  fetch("https://password-checker.p.rapidapi.com/password/evaluate", {
    "method": "POST",
    "headers": {
      "content-type": "application/json",
      "x-rapidapi-key": "e2ade1d70fmshb66883d53854717p17f9bejsn92e2ff768b21",
      "x-rapidapi-host": "password-checker.p.rapidapi.com"
    },
    // stringify the data
    "body": JSON.stringify({
      // user's password here is sent to the API
      "password": `${password}`
    })
  })
    // get response from the API request
    .then(response => {
      return response.json()
    })
    // get the json data from the API and set to variable dataPassword
    .then(function (dataPassword) {
      // console log the data from the API
      console.log(dataPassword)
      // set variable for password Score (ranked 1-5; with 5 being great)
      var passScore = dataPassword.score
      // set variable for time to guess the password in seconds
      var passTimeToGuess = dataPassword.timeToGuessInSeconds
      console.log(`Your password is rated ${passScore} out of 5, and would take ${passTimeToGuess} seconds to guess`)
      // if password score is between 0 & 2 turn background Red
      if (passScore >= 0 && passScore < 2) {
        document.getElementByClass("strength-one").style.background = "red";
      }
      // if password score is between 2 & 3 turn background Yellow
      if (passScore >= 2 && passScore < 3) {
        document.getElementByClass("strength-one").style.background = "yellow";
        document.getElementByClass("strength-two").style.background = "yellow";
      }
      // if password score is between 4 & 5 turn background Green
      if (passScore >= 4 && passScore < 5) {
        document.getElementByClass("strength-one").style.background = "green";
        document.getElementByClass("strength-two").style.background = "green";
        document.getElementByClass("strength-three").style.background = "green";
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


//       // put the word into the box
//       // document.getElementById("pwd").innerHTML = data.word;


//       // Fetch request to find the word's rhyme

//       // fetch(`https://wordsapiv1.p.rapidapi.com/words/${randomWord}/rhymes`, {
//       //   method: "GET",
//       //   redirect: "follow",
//       //   cache: "reload",
//       //   headers: {
//       //     "x-rapidapi-key": "e2ade1d70fmshb66883d53854717p17f9bejsn92e2ff768b21",
//       //     "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
//       //   }
//       // })
//       //   .then(function (response) {
//       //     return (response.json());
//       //   })
//       //   .then(function (dataRhymes) {
//       //     console.log(dataRhymes.rhymes.all)
//       //   })

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


// Thomas' Password Checker API:
// ERROR: from origin 'null' has been blocked by CORS policy: 
// No 'Access-Control-Allow-Origin' header is present on the requested resource. 
// If an opaque response serves your needs, set the request's mode to 'no-cors' 
// to fetch the resource with CORS disabled.

// var passwordTest = "hiEveryone"
// fetch(`https://password-check-api.herokuapp.com/check/${passwordTest}`)
//   .then(function (resp) {
//     return resp.json();
//   })
//   .then(function (response) {
//     console.log(response);
//   })
