let clickW = document.getElementById('words');
let clickV = document.getElementById('verb');
let clickN = document.getElementById('noun');
let clickA = document.getElementById('adjective');
let clickDefault = document.getElementById('default');
let clickSimple = document.getElementById('simple');
let clickWifi = document.getElementById('wifi');
let clickSocials = document.getElementById('socials');
let clickImpossible = document.getElementById('impossible');

// stores the fetched data in array
let wordBank = [];
let nounBank = [];
let adjBank = [];
let verbBank = [];


// randomWord Button
clickW.addEventListener('click', function () {
<<<<<<< HEAD
  let pOut = `<button class="button is-info is-small is-rounded" id="WordX">word</button>`;


  document.getElementById("preset-Out").innerHTML += pOut;
  this.disabled = true;
  // words1 variable for local storage saving/loading
  words1 = true

  for (let i = 0; i < 10; i++) {
    fetch("https://wordsapiv1.p.rapidapi.com/words/?lettersMin=4&lettersMax=8&random=true", {
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
      .then(function (dataWord) {
        console.log(dataWord.word)
        let randomW = dataWord.word;
        // converts to uppercase
        let upper = randomW[0].toUpperCase() + randomW.slice(1);
        // fetches the word and split it if it fetches multiple word
        let combine = upper.split(' ');
        // pushes the words to the wordbank as one word
        wordBank.push(combine.join(''));
        console.log("wordBank:" + wordBank)
      })
  }
  // pushes the bank to the generate array
  possibles.push(wordBank);
=======
wordEvent();
>>>>>>> 74c3308e551f666672d3854c253351db75f7a6e6
});
// randomVerb Button
clickV.addEventListener('click', function () {
  verbEvent();
});
// randomNoun Button
clickN.addEventListener('click', function () {
nounEvent();
});
// randomAdjective Button
clickA.addEventListener('click', function () {
adjectiveEvent();
});
// Number button
document.getElementById('num').addEventListener('click', function () {
numEvent();
});
// emoji button
document.getElementById('emoji').addEventListener('click', function () {
emojiEvent();
});
// specialC Button
document.getElementById('special').addEventListener('click', function () {
specialEvent();
});


// Preset section
clickDefault.addEventListener('click', function (){
    verbEvent();
    nounEvent();
    specialEvent();
    numEvent();
    numEvent();
    numEvent();
    numEvent();
    specialEvent();
});