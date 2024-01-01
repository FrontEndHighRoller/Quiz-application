// 1. Create a multidimensional array to hold quiz questions and answers
const array = [ 
  ['How many planets are in the Solar System?', '8'],
  ['How many continents are there?', '7'],
  ['How many legs does an insect have?', '6'],
  ['What year was JavaScript created?', '1995']  
];

// 2. Store the number of questions answered correctly
let correctAnswers = 0;
let rightArray = [];
let wrongArray = [];
/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/
for(let i = 0; i < array.length; i++ ){
  let question = array[i][0];
  let answer = array[i][1];
  let response = prompt(question);

    
if(response === answer){
     correctAnswers += 1;
     rightArray.push(question);
    
    
  
}else{
      wrongArray.push(question);
}
}

function createListItems(arr) {
  let items = '';
  for (let i = 0; i < arr.length; i++) {
    items += `<li>${arr[i]}</li>`;
  }
  return items;
}
let html = `
<h1>You got ${correctAnswers} question(s) right</h1>
<h2>You got these questions right:</h2>
<ol>
 ${createListItems(rightArray)}
</ol>

<h2>You got these questions wrong</h2>
<ol>
  ${createListItems(wrongArray)}
</ol>
`
    
document.querySelector("main").innerHTML = html