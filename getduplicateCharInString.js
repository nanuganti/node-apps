let myString = "helllo jello";
//Remove Duplicated from string 
const removeDuplicatesFromString = () => {
    let mySet = new Set();
    for (let index = 0; index < myString.length; index++) {
        const myChar = myString.charAt(index);
        if (myString.indexOf(myChar) !== myString.indexOf(myChar, index + 1)) {
            mySet.add(myChar);
        }
    }
    return mySet;
}
console.log("Removed Duplicates From String  #### ", removeDuplicatesFromString());

//output
//Set(4) { 'h', 'e', 'l', 'o' }

//first repeated charcter
//Remove Duplicated from string 
const firstRepeatedCharactor = () => {
    for (let index = 0; index < myString.length; index++) {
        const myChar = myString.charAt(index);
        if (myString.indexOf(myChar, index) > 0) {
            return myChar;
        }
    }
}
console.log("First Repeated Character #### ", firstRepeatedCharactor());

const allRepeatedCharactor = () => {
    let mySet = new Set();
    for (let index = 0; index < myString.length; index++) {
        const myChar = myString.charAt(index);
        if (myString.indexOf(myChar, index + 1) > 0) {
            mySet.add(myChar);
        }
    }
    return mySet;
}
console.log("All Repeated Characters #### ", allRepeatedCharactor());