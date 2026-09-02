 const nums = [10, 20, 30, 40, 50];

const greet = ["Hello", "Hi", "Hey", "cia"];

nums[4] = 339; // here I have changed the value of nums[4] from 50 to 339;

greet[2] = "Hola"; // here the value of greet[2] is changed from Hey to Hola


console.log(nums);

console.log(greet); // console.log(constant name) use to print the constant
 // that I have changed in the webpage console


function getLastElement(array) {
    return array[array.length - 1]; // this will return the last element of the array

    // console.log(array[array.length - 1]);
    // this will print the last element in the console
    // -1 because the array index starts from 0
    // so to get the last element of the array we use -1
}


const arraySwap = [1, 2, 3, 4, 5];

function Swap(array) {

    const temp = array[0];

    array[0] = array[4];

    array[4] = temp;
}

Swap(arraySwap);

console.log(arraySwap)
//exercise 11-a to 11c here in file