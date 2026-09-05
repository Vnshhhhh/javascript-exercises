 function evenAndOdd() {
    for (let i = 0; i <= 10; i++) {

        if (i % 2 == 0) {
            console.log(i + " is even number");
        } else {
            console.log(i + " is odd number");
        }

    }
}


function counter() {
    for (let i = 1; i <= 13; i++) {
        console.log(i);
    }
}


function increaseByOne(arr) {

    let newArr = [];

    for (let i = 0; i < arr.length; i++) {

        let number = arr[i];
w
        let increasedNumber = number + 1;

        newArr.push(increasedNumber);
    }

    return newArr;
}


let arr = [1, 2, 3];

let result = increaseByOne(arr);
 



counter();
evenAndOdd();
console.log(result);

// here i have solved form -> 11-d to 11-h exercise