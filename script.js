//selectors:
const btn = document.getElementById('counter-btn');
const inputText = document.getElementById('text-area');
const wordNo = document.getElementById('word-num');

//event handlers:
btn.addEventListener('click', countWords);


//functions:
function countWords() {
    //counting characters:
    let char = inputText.value.split("");

    let words = replaceNewLineChar(char);
    words = words.toString();
    console.log(words)
    words = words.split(" ");
    words.forEach(element => {
        console.log(element)
    });

    let [counter, newLineCounter] = removeEmptyStrings(words);
  
    wordNo.innerText = words.length - counter - newLineCounter + " words \n " + char.length + " characters";

    console.log(words.length-counter);
}

function removeEmptyStrings(array) {
    let counter = 0;
    let newLineCounter = 0;
    array.forEach(element => {
        if(element === "") {
            counter++;
        }
        if(element===",") {
            newLineCounter++;
        }
    });
    return [counter, newLineCounter];
}

function replaceNewLineChar(array) {
    for (let index = 0; index < array.length; index++) {
       if (array[index]==="\n") {
        array.splice(index, 1, " ");
       }
    }
    return array;
}