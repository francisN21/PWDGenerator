// Test the strength of the password using an API

// Click Test to test the password
document.getElementById('test').addEventListener('click', function () {
    // Temporary password for testing
    // fetch request using Thomas' API, thank you Thomas! 
    const corsAll = "https://cors-anywhere.herokuapp.com/"

    //   Fetch Request setting the URl to the password to be checked
    fetch(corsAll + `https://password-check-api.herokuapp.com/check/${pw}`)
        // return JSON
        .then(res => res.json())
        //   Get the Data
        .then(function (dataPassword) {
            // Set password score to variable passScore
            var passScore = dataPassword.passed
            // Display a password Strength Bar to represent the password Score
            // If password score is between 0 & 2 display 33% of bar and turn background Red
            if (passScore >= 0 && passScore < 2) {
                document.querySelector("#password-strength-bar").style.border = "thin solid #000000"
                document.querySelector("#password-bar").style.background = "red";
                document.querySelector("#password-bar").style.border = "thin solid #000000"
                document.querySelector("#password-bar").style.width = "33%";
                document.querySelector("#password-bar").textContent = "Weak Password"
            }
            // if password score is between 2 & 4 display 66% of bar and turn background Yellow
            if (passScore >= 2 && passScore < 4) {
                document.querySelector("#password-strength-bar").style.border = "thin solid #000000"
                document.querySelector("#password-bar").style.background = "yellow";
                document.querySelector("#password-bar").style.border = " thin solid #000000"
                document.querySelector("#password-bar").style.width = "66%";
                document.querySelector("#password-bar").textContent = "Medium Password"
            }
            // if password score is between 4 & 5 display 100% of bar and turn background Green
            if (passScore >= 4 && passScore < 5) {
                document.querySelector("#password-strength-bar").style.border = "thin solid #000000"
                document.querySelector("#password-bar").style.background = "green";
                document.querySelector("#password-bar").style.border = " thin solid #000000"
                document.querySelector("#password-bar").style.width = "100%";
                document.querySelector("#password-bar").textContent = "Strong Password"
            }
        })



        // Catch any Error from the API
        .catch(err => {
            console.error(err);
        });
});
// Load button on Click Event to reload buttons selected
document.getElementById('load').addEventListener('click', function () {
    // Gets possibles from local storage
    // Sets the possibles array back from localStorage
    localStorage.getItem("possibles", possibles)
    console.log(possibles)
    // gets the saved pw back from local storage
    var load = localStorage.getItem("save", pw);
    // set the pwd box text contents to the password saved
    document.querySelector("#pwd").textContent = load

    // set variables to get the local storage values
    let numbersStor = localStorage.getItem("numbers");
    let emojiStor = localStorage.getItem("emojis");
    let specialStor = localStorage.getItem("special");
    let verbStor = localStorage.getItem("verbs");
    let wordsStor = localStorage.getItem("words");
    let nounStor = localStorage.getItem("nouns");
    let adjStor = localStorage.getItem("adjectives");

    // console.log to check the values
    // console.log(numbersStor)
    // console.log(emojiStor)
    // console.log(specialStor)
    // console.log(verbStor)
    // console.log(wordsStor)
    // console.log(nounStor)
    // console.log(adjStor)


    // If statement to see if local storage is True for the Button, then if so, put the button back on the screen
    // If statement to check if numbers were saved
    if (numbersStor == "true") {
        // console.log("NumbersStore is true")
        document.getElementById("preset-Out").innerHTML += `<button class="button is-small is-info is-rounded" id="numX">num</button>`;
    }
    // If statement to check if emojis were saved
    if (emojiStor == "true") {
        // console.log("EmojiStor is true")
        document.getElementById("preset-Out").innerHTML += `<button class="button is-info is-small is-rounded" id="emojiX">emoji</button>`;
    }
    // If statement to check if special Characters were saved
    if (specialStor == "true") {
        // console.log("SpecialStor is true")
        document.getElementById("preset-Out").innerHTML += `<button class="button is-info is-small is-rounded" id="special">special</button>`;
    }
    // If statement to check if verbs were saved
    if (verbStor == "true") {
        // console.log("Verbs are true")
        document.getElementById("preset-Out").innerHTML += `<button class="button is-info is-small is-rounded" id="verbX">Verb</button>`;
    }
    // If statement to check if random words were saved
    if (wordsStor == "true") {
        // console.log("WordStor is true")
        document.getElementById("preset-Out").innerHTML += `<button class="button is-info is-small is-rounded" id="WordX">word</button`;
    }
    // If statement to check if nouns were saved
    if (nounStor == "true") {
        // console.log("nounStor is true")
        document.getElementById("preset-Out").innerHTML += `<button class="button is-info is-small is-rounded" id="nounX">Noun</button>`;
    }
    // If statement to check if adjectives were saved
    if (adjStor == "true") {
        // console.log("adjStor is true")
        document.getElementById("preset-Out").innerHTML += `<button class="button is-info is-small is-rounded" id="adjX">Adjective</button>`;
    }
});