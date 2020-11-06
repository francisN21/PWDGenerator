const el = document.querySelector("#module");

el.addEventListener("mousemove", (e) => {
  el.style.backgroundPositionX = -e.offsetX + "px";
  el.style.backgroundPositionY = -e.offsetY + "px";
});

// temporary arrays so we can see results for password
// words will be replaced by the api
// will add figures of speech
let num = [1,2,3,4,5,6,7,8,9,0];
let emojis = [":)", ":(", ":-P", "xD", "UwU"];
let specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
let words = ["Happy","sad","angry","surprised"];
let possibles = [];

// event listener to push to array 
document.getElementById('num').addEventListener('click', function(){
  let pOut = `<button class="button is-info is-rounded" id="numX">num</button>`;
  possibles.push(num);
  console.log(possibles)
  document.getElementById("preset-Out").innerHTML = pOut;
});
document.getElementById('emoji').addEventListener('click', function(){
  possibles.push(emojis);
  console.log(possibles)
});
document.getElementById('special').addEventListener('click', function(){
  possibles.push(specialChar);
  console.log(possibles)
});
document.getElementById('words').addEventListener('click', function(){
  possibles.push(words);
  console.log(possibles)
});

console.log(possibles)
let pw = [];
// generate fetches the possibles array to create the password
// lvl1 password generator - will add more complexity as it goes
document.getElementById('generate').addEventListener('click', function(){
  let ans = possibles;
  for (let i=0; i < ans.length; i++){
    let rand = Math.floor(Math.random() * ans[i].length);
              pw += possibles[i][rand];
  }
  console.log(pw)
  document.getElementById("pwd").innerHTML = pw;
});
console.log(pw);
