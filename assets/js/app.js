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

// event listener to push to array 
document.getElementById('num').addEventListener('click', function () {
  let pOut = `<button class="button is-info is-rounded" id="numX">num</button>`;
  possibles.push(num);
  console.log(possibles);
   if (num1 == false){
  document.getElementById("preset-Out").innerHTML += pOut;
  num1 = true;}
});
document.getElementById('emoji').addEventListener('click', function () {
  let pOut = `<button class="button is-info is-rounded" id="emojiX">emoji</button>`;
  possibles.push(emojis);
  console.log(possibles);
  if (emoji1 == false){
  document.getElementById("preset-Out").innerHTML += pOut;
  emoji1 = true;}
});
document.getElementById('special').addEventListener('click', function () {
  let pOut = `<button class="button is-info is-rounded" id="special">special</button>`;
  possibles.push(specialChar);
  console.log(possibles);
  if (special1 == false){
  document.getElementById("preset-Out").innerHTML += pOut;

  special1 = true;}
});
document.getElementById('words').addEventListener('click', function () {
  // possibles.push(words);
  // console.log(possibles)
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
      console.log(dataNoun)

      var randomN = dataNoun.word.split(" ");
      console.log(randomN)
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


  console.log("this is ans" + ans)
  for (let i = 0; i < ans.length; i++) {
    let rand = Math.floor(Math.random() * ans[i].length);
    pw += possibles[i][rand];
    console.log(possibles)
  }
  document.getElementById("pwd").innerHTML = pw;
});



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
