let clickW = document.getElementById('words');
let clickV = document.getElementById('verb');
let clickN = document.getElementById('noun');
let clickA = document.getElementById('adjective');
let clickDefault = document.getElementById('default');

let wordBank = [];
let nounBank = [];
let adjBank = [];
let verbBank = [];

// let words1 = false;
// let noun1 = false;
// let verb1 = false;
// let adj1 = false;

// randomWord Button
clickW.addEventListener('click', function () {
    let pOut = `<button class="button is-info is-small is-rounded" id="WordX">word</button>`;
    if (words1 == false) {
      console.log("inside clickWord: " + words1);
      
      document.getElementById("preset-Out").innerHTML += pOut;
      this.disabled = true;
      words1 = true;
    } 

  for (let i = 0; i < 10; i++){
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
        console.log(wordBank)
      })
    }
    // pushes the bank to the generate array
    possibles.push(wordBank);
  });

console.log(possibles)

// randomVerb Button
clickV.addEventListener('click', function () {
    let pOut = `<button class="button is-info is-small is-rounded" id="verbX">Verb</button>`;
    if (verb1 == false) {
      document.getElementById("preset-Out").innerHTML += pOut;
      this.disabled = true;
  
      verb1 = true;
    }
  
  for (let i = 0; i < 10; i++){
    fetch("https://wordsapiv1.p.rapidapi.com/words/?partOfSpeech=verb&lettersMin=4&lettersMax=8&random=true", {
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
      .then(function (dataVerb) {
        let randomV = dataVerb.word;
        let upper = randomV[0].toUpperCase() + randomV.slice(1);
        let combine = upper.split(' ');
        verbBank.push(combine.join(""));
        console.log(verbBank)
      })
    }
    possibles.push(verbBank);
    console.log(possibles)
    console.log(verbBank)
  });

  // randomNoun Button
clickN.addEventListener('click', function () {
    let pOut = `<button class="button is-info is-small is-rounded" id="nounX">Noun</button>`;
    if (noun1 == false) {
      document.getElementById("preset-Out").innerHTML += pOut;
      this.disabled = true;
  
      noun1 = true;
    }
  
  for (let i = 0; i < 10; i++){
    fetch("https://wordsapiv1.p.rapidapi.com/words/?partOfSpeech=noun&lettersMin=4&lettersMax=8&random=true", {
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
        let randomN = dataNoun.word;
        let upper = randomN[0].toUpperCase() + randomN.slice(1);
        let combine = upper.split(' ');
        nounBank.push(combine.join(""));
        console.log(nounBank)
      })
    }

    possibles.push(nounBank);
    console.log(possibles)
    console.log(nounBank)
  });

    // randomAdjective Button
clickA.addEventListener('click', function () {
    let pOut = `<button class="button is-info is-small is-rounded" id="adjX">Adjective</button>`;
    if (adj1 == false) {
      document.getElementById("preset-Out").innerHTML += pOut;
      this.disabled = true;
  
      adj1 += true;
    }
  
  for (let i = 0; i < 10; i++){
    fetch("https://wordsapiv1.p.rapidapi.com/words/?partOfSpeech=noun&lettersMin=4&lettersMax=8&random=true", {
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
      .then(function (dataAdj) {
        let randomA = dataAdj.word;
        let upper = randomA[0].toUpperCase() + randomA.slice(1);
        let combine = upper.split(' ');
        adjBank.push(combine.join(""));
        console.log(adjBank)
      })
    }
    possibles.push(adjBank);
    console.log(possibles)
    console.log(adjBank)
  });