let clickW = document.getElementById('words');
let clickV = document.getElementById('verb');
let clickDefault = document.getElementById('default');

// randomWord Button
clickW.addEventListener('click', function () {
    let pOut = `<button class="button is-info is-small is-rounded" id="words">words</button>`;
    if (words1 == false) {
      document.getElementById("preset-Out").innerHTML += pOut;
  
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
      .then(function (dataVerb) {
        // fetches the word and split it if it fetches multiple word
        let randomW = dataVerb.word.split(" ");
        // pushes the words to the wordbank as one word
        wordBank.push(randomW.join(""));
        console.log(wordBank)
      })
    }
    // pushes the bank to the generate array
    possibles.push(wordBank);
  });

console.log(possibles)

// randomVerb Button
clickV.addEventListener('click', function () {
    let pOut = `<button class="button is-info is-small is-rounded" id="verb">noun</button>`;
    if (verb1 == false) {
      document.getElementById("preset-Out").innerHTML += pOut;
  
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
        // fetches the word and split it if it fetches multiple word
        let randomV = dataVerb.word.split(" ");
        // pushes the words to the wordbank as one word
        verbBank.push(randomV.join(""));
        console.log(verbBank)
      })
    }
    // pushes the bank to the generate array
    possibles.push(verbBank);
  });