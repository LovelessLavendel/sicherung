// // let age = window.prompt("wie alt dist du?");

// // console.log("Alter:",age);
// function greeting(name){
//     alert("Hallo "+ name);
// }

// function getUserInput(collbackFunction){
//     let name = window.prompt("wie hesit du?");
//     collbackFunction(name);
// }
// getUserInput(greeting);

const arr = [[5, 69, 16], [21, 7, 56], [65, 17, 23], [63, 72, 32]];
const showArrValues = (arr) => {
    for(let i=0; i<arr.length; i++){
        // Console.log(arr[i][0]);
        for (let j=0; j<arr[i].length; j++) {
            // console.log(`arr[${i}][${j}]: ${arr[i][j]}`);
            console.log(arr[i][j]);
        }

    }
}
showArrValues(arr);