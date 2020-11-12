// Test the strength of the password using an API

// Click Test to test the password
document.getElementById('test').addEventListener('click', function () {
    // Temporary password for testing
    var passwordTest = "GxVbares1000"

    // fetch request using Thomas' API, thank you Thomas! 
    const corsAll = "https://cors-anywhere.herokuapp.com/"

    //   Fetch Request setting the URl to the password to be checked
    fetch(corsAll + `https://password-check-api.herokuapp.com/check/${passwordTest}`)
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
                document.querySelector("#password-bar").textContent = "Low Strength"
            }
            // if password score is between 2 & 4 display 66% of bar and turn background Yellow
            if (passScore >= 2 && passScore < 4) {
                document.querySelector("#password-strength-bar").style.border = "thin solid #000000"
                document.querySelector("#password-bar").style.background = "yellow";
                document.querySelector("#password-bar").style.border = " thin solid #000000"
                document.querySelector("#password-bar").style.width = "66%";
                document.querySelector("#password-bar").textContent = "Medium Strength"
            }
            // if password score is between 4 & 5 display 100% of bar and turn background Green
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




