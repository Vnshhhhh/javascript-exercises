const myArray =[10 ,20 ,30,];
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
