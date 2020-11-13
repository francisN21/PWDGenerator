// All Events container
function numEvent(){
    let pOut = `<button class="button is-small is-info is-rounded" id="numX">#</button>`;
    possibles.push(num);
    console.log(possibles);
  
    document.getElementById("preset-Out").innerHTML += pOut;
    this.disabled = true;
    // num1 variable for local storage saving/loading
    num1 = true;
    };

function emojiEvent(){
    let pOut = `<button class="button is-info is-small is-rounded" id="emojiX">:)</button>`;
    possibles.push(emojis);
    console.log(possibles);
  
    document.getElementById("preset-Out").innerHTML += pOut;
    this.disabled = true;
    // emoji1 variable for local storage saving/loading
    emoji1 = true;
    };

function specialEvent(){
    let pOut = `<button class="button is-info is-small is-rounded" id="special">-</button>`;
    possibles.push(specialChar);
    console.log(possibles);
      
    document.getElementById("preset-Out").innerHTML += pOut;
    this.disabled = true;
    // special1 variable for local storage saving/loading
    special1 = true;
    };

// Events with api fetch
    // random word fetch
    function wordEvent(){
        let pOut = `<button class="button is-info is-small is-rounded" id="WordX">word</button>`;
        document.getElementById("preset-Out").innerHTML += pOut;
        this.disabled = true;
        // words1 variable for local storage saving/loading
        words1 = true;
        for (let i = 0; i < 3; i++) {
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
            });
          }
        // pushes the bank to the generate array
        possibles.push(wordBank);
        console.log(possibles);
        console.log(wordBank);
        };
    // random verb fetch
    function verbEvent(){
        let pOut = `<button class="button is-info is-small is-rounded" id="verbX">Verb</button>`;
        document.getElementById("preset-Out").innerHTML += pOut;
        this.disabled = true;
        for (let i = 0; i < 3; i++) {
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
                });
        }
        possibles.push(verbBank);
        console.log(possibles);
        console.log(verbBank);
        };
    // random noun fetch
    function nounEvent(){
        let pOut = `<button class="button is-info is-small is-rounded" id="nounX">Noun</button>`;
        document.getElementById("preset-Out").innerHTML += pOut;
        this.disabled = true;
        // noun1 variable for local storage saving/loading
        noun1 = true
        for (let i = 0; i < 3; i++) {
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
              });
            }
        possibles.push(nounBank);
        console.log(possibles);
        console.log(nounBank);
        };
    // random adjective fetch
    function adjectiveEvent(){
        let pOut = `<button class="button is-info is-small is-rounded" id="adjX">Adjective</button>`;
        document.getElementById("preset-Out").innerHTML += pOut;
        this.disabled = true;
        // adj1 variable for local storage saving/loading
        adj1 = true
        for (let i = 0; i < 3; i++) {
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
            });
            }
            possibles.push(adjBank);
            console.log(possibles);
            console.log(adjBank);
        };
