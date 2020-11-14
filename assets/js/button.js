let clickW = document.getElementById('words');
let clickV = document.getElementById('verb');
let clickN = document.getElementById('noun');
let clickA = document.getElementById('adjective');
let clickDefault = document.getElementById('default');
let clickSimple = document.getElementById('simple');
let clickWifi = document.getElementById('wifi');
let clickSocials = document.getElementById('socials');
let clickImpossible = document.getElementById('impossible');
let clickBank = document.getElementById('bank');



// stores the fetched data in array
let wordBank = [];
let nounBank = [];
let adjBank = [];
let verbBank = [];

// randomWord Button
clickW.addEventListener('click', function () {
  wordEvent();
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

clickSimple.addEventListener('click', function (){
    specialEvent();
    wordEvent();
    specialEvent();
    adjectiveEvent();
    numEvent();
    numEvent();
    specialEvent();
    specialEvent();
});

clickWifi.addEventListener('click', function (){
    numEvent();
    numEvent();
    verbEvent();
    nounEvent();
    nounEvent();
    specialEvent();
    numEvent();
    numEvent();

});

clickSocials.addEventListener('click', function (){
    numEvent();
    specialEvent();
    verbEvent();
    specialEvent();
    nounEvent();
    specialEvent();
    specialEvent();
});

clickImpossible.addEventListener('click', function (){
    numEvent();
    numEvent();
    numEvent();
    numEvent();
    verbEvent();
    specialEvent();
    wordEvent();
    specialEvent();
    nounEvent();
    adjectiveEvent();
    specialEvent();
    numEvent();
    numEvent();
    numEvent();
    numEvent();
});

clickBank.addEventListener('click', function (){
  numEvent();
  verbEvent();
  numEvent();
  adjectiveEvent();
  specialEvent();
});



function myFunction() {
  var copyText = document.getElementById('pwd');
  copyText.select();
  copyText.setSelectionRange(0, 99999); 
  document.execCommand("copy");
  // alert("Copied password : " + copyText.value);
}