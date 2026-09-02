/* const myArray =[10 ,20 ,30,];
console.log(myArray);

console.log(myArray[1]);
myArray[0] = 99;
console.log(myArray);

[1,'vansh',true,10.5, {name :'socks'}];
 console.log(typeof [1 ,2 ]);
 console.log(Array.isArray([1,2]));

 console.log(myArray.length);
 myArray.push(100);
 console.log(myArray);

 myArray.splice(0 ,1);//(here 0 is index and 1 is how many elements to remove)
 console.log(myArray);

 let i = 1;
 while(i<=5)//while loop will run until the condition  is met
    {
        console.log(i);
        i = i + 1 ;
    }//iteration kehte hai ise


    for(let i = 1; i <= 5; i++)//for loop will run until  condition is met!!
    {
        console.log(i);
    }
        /*use standard loop=>for
        non-standard loop=>while  

        let randomNumber = 0;

        while(randomNumber <0.5)
            {
                randomNumber = Math.random();
        }

        console.log(randomNumber);

        

        const todolist = [
            'make dinner',//index0
            'wash dishes',//index1
            'do laundry',//index2
            'clean room'//index3
        ]
        for (let i =0;
             i  <= todolist.length - 1; 
             i++)
             {
                const value = todolist[i];
                console.log(value);
            }/*looping through array  :
        1.go through each value of an array
        2. do soemthing with each value
        */

     
//Accumulator pattern:
/* 1. create a var to store the result
2. loop thorugh the array and update th result 
*/

const nums = [1, 1, 3]
const total=0;

for(let i = 0; i < nums.length; i++)
 //this looop will go through each value of the array
{ const num =nums[i];
    total += num;

}
console.log(total);

// use accumulator pattern 
const numsDoubled = [];
for ( let i = 0; i < nums.length; i++)
{ 
    const num = nums[i];
    numsDoubled.push(num * 2);
}
console.log(numsDoubled);



        
