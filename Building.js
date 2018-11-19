let newWordsarrayCapitalized = [];

newWordsarray.forEach(

    (word)=>{
        let firstLetter = word [0];  //first letter of the word
        let capitalizedLetter = firstLetter.toUpperCase();  // first letter capitalized
        let capitalizedWord = word.replace(firstLetter, capitalizedLetter); //the word capitalized
        newWordsarrayCapitalized.push(capitalizedWord);  // put the word in the new array
    }
);

console.log(newWordsarrayCapitalized)