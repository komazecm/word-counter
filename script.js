//selectors:
const btn = document.getElementById('counter-btn');
const inputText = document.getElementById('text-area');
const wordNo = document.getElementById('word-num');

//event handlers:
btn.addEventListener('click', countWords);


//functions:
function countWords() {
    //counting words:
    let words = inputText.value.split(" ");    
    let counter = removeEmptyStrings(words);
    //counting characters:
    let char = inputText.value.split("");
    
    wordNo.innerText = words.length - counter + " words \n " + char.length + " characters";

    console.log(words.length-counter);
}

function removeEmptyStrings(array) {
    let counter = 0;
    array.forEach(element => {
        if(element === "") {
            counter++;
        }
    });
    return counter;
}