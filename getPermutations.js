// a 
const getPermutations = (myString) => {
    if (myString.length < 2) {
        return myString;
    }

    let permutationsArray = [];
    for (let i = 0; i < myString.length; i++) {
        let currentChar = myString[i];
        let remainingString = myString.slice(0, i) + myString.slice(i + 1, myString.length);
        for (let j = 0; j < remainingString.length; j++) {
            permutationsArray.push(currentChar + getPermutations(remainingString)[j]);
        }
    }
    return permutationsArray;

};

console.log("Permutations....", getPermutations("a"));
console.log("Permutations....", getPermutations("abc"));
console.log("Permutations....", getPermutations("abcd"));

