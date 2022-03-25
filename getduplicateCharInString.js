let myString = "hello";
let mySet = new Set();
for (let index = 0; index < myString.length; index++) {
    const myChar = myString.charAt(index);
    if (myChar !== myString.indexOf(myChar, index + 1)) {
        mySet.add(myChar);
    }
}
console.log(mySet);

//output
//Set(4) { 'h', 'e', 'l', 'o' }