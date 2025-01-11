// let arr=[1,2,3,4,5,6,2,3];
// let num = 2;
// let largest = 0;

// for(let i=0; i<arr.length; i++){
//     if(arr[i] == num){
//         arr.splice(i,1);
//     }
//     if(largest <= arr[i] ){
//         largest = arr[i];
//     }
// }

// console.log(arr);
// // console.log(largest);

// const developer = {
//     name:"om",
//     age:20,
//     salary:80000
// };
//  developer.age = 21;
// console.log(developer["age"]);
// console.log(developer);


// Guessing game
// const maxNum = prompt("Enter the max number");
// const randomNum = Math.floor(Math.random()*maxNum) + 1;
// let guess = prompt("Guess the number");

// while(true){
//     if(guess == "quit"){
//         console.log("You quit the game");
//         break;
//     }
//     else if(guess == randomNum){
//         console.log("Congrajulation!, you enter the correct number");
//         break;
//     }
//     else if(guess < randomNum){
//         console.log("small number");
//         guess = prompt("Your guess was too small, please try again");
//     }
//     else {
//         console.log("large number");
//         guess = prompt("Your guess was too long, please try again");
//     }
// }


// let number = Math.floor(Math.random()*6) + 1;
// console.log(number);

// const car = {
//     name : "Maruti Suzuki",
//     model : "X10",
//     color : "Red"
// }
// console.log(car.color);

// const Person = {
//     name : "Om Parkhi",
//     age : 21,
//     city : "Nagpur"
// }
// Person.city = "New York";
// Person.country = "United State"
// console.log(Person);

// function hello(){
//     console.log("Hello");
// }
// for(let i=1; i<=5; i++){
//     console.log(i);
//     hello();
// }


// let arr = [1,53,6,8,3,6,7];
// let num = 5;
// let len = arr.length;
// function largeNum(arr,num){
//     for(let i=0; i<=len; i++){
//         if(arr[i] > num){
//             console.log(arr[i]);
//         }
//     }
// }
// largeNum(arr,num);


// const mul = (a=1,b=1) => (
//     a*b
// );
    
// setInterval( () => {
//     console.log("Hello World")
// },2000);
// clearInterval(10000);
// let arr = [2,3,6,5,1,8,2];
// let len = arr.length;
// let sum=0;

// const arrayAverage = (arr) => {
//     let total = arr.reduce((sum,el) => (sum + el));
//     console.log(total);
//     let avg = total/len;
//     console.log(avg);
// }
// arrayAverage(arr);

// const isEven = (a) => {
//     if(a % 2 == 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(isEven(3));
// console.log(isEven(2));
// console.log(isEven(4.0));

// let arr1 = [2,30,49,6,4,34,5,0];
// let res = arr1.reduce( (min, el) => {
//     if(min < el){
//         return min;
//     } else{
//         return el;
//     }
// })
// console.log(res)
// let multiple = arr1.some( (n) => {
//     return n%2==0;
// })
// console.log(multiple)

// function arr(...args) {
//     for(let i=0; i<args.length; i++){
//         console.log("You gave us:", args[i]);
//     }
// }

// let arr = [1,2,3,4,5,6];
// let len = arr.length;
// const Average = (arr) => {
//     let newArr = arr.reduce( (acm,el) => acm + el**2);
//     let avg = newArr/len;
//     console.log(avg);
// }
// Average(arr);

let arr = ["om","tony","stark","peter","steve"];
const elements = (arr) => {
    const newArr = arr.map( (str) => str.toUpperCase());
     console.log(newArr);
}
elements(arr);