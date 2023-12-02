
//////////////////////////////////////////////////////////////////////////////////////////

/*
1- Write a program that allow to user enter number then print it
  var number=+window.prompt("Enter Your Number");
  document.getElementById("demo").innerHTML="The number you entered is "+number;
  
 */
//////////////////////////////////////////////////////////////////////////////////////////

/*  
 2- Write a program that take number from user then print yes if that number can divide by 3
  and 4 otherwise print no

var number=+window.prompt("Enter Your Number");
if(number%3==0 && number%4==0){
    document.getElementById("demo").innerHTML="Yes";
}
else{
    document.getElementById("demo").innerHTML="No";
}

*/
//////////////////////////////////////////////////////////////////////////////////////////

/* 
3- Write a program that allows the user to insert 2 integers then print the max

var number1=+window.prompt("Enter First Number");
var number2=+window.prompt("Enter Second Number");
if(number1>number2)
{

document.getElementById("demo").innerHTML="The Max "+ number1;
}
else if(number2>number1){
    document.getElementById("demo").innerHTML="The Max "+number2;

}
else{
    document.getElementById("demo").innerHTML=number2+" = "+number1;

}

*/
//////////////////////////////////////////////////////////////////////////////////////////

/*

4- Write a program that allows the user to insert an integer then print negative if it is
negative number otherwise print positive.

var number=+window.prompt(" Check The Number positive or negative or equals Zero");
if(number>0){
    document.getElementById("demo").innerHTML= number+" positive ."
}
else if(number<0){
    document.getElementById("demo").innerHTML= number+" negative ."

}
else{
    document.getElementById("demo").innerHTML= number+" equals Zero ."

}

*/

//////////////////////////////////////////////////////////////////////////////////////////
/*
5- Write a program that take 3 integers from user then print the max element
and the min element.

var number1=+window.prompt("Enter First Number");
var number2=+window.prompt("Enter Second Number");
var number3=+window.prompt("Enter Third Number");
if (number1 > number2 && number1 > number3) {
  if (number2 > number3) {
    console.log("max element = " + number1);
    console.log("min element = " + number3);
  } else {
    console.log("max element = " + number1);
    console.log("min element = " + number2);
  }
} else if (number2 > userNumber1 && number2 > number3) {
  if (number1 > number3) {
    console.log("max element = " + number2);
    console.log("min element = " + number3);
  } else {
    console.log("max element = " + number2);
    console.log("min element = " + number1);
  }
} else if (number3 > userNumber1 && number3 > number2) {
  if (number1 > number2) {
    console.log("max element = " + number3);
    console.log("min element = " + number2);
  } else {
    console.log("max element = " + number3);
    console.log("min element = " + number1);
  }
} else {
  console.log(
    number1 + " Equals " + number2 + " Equals " + number3
  );
}

*/
//////////////////////////////////////////////////////////////////////////////////////////
/*
6- Write a program that allows the user to insert integer number then
check If a number is oven or odd

var number =+window.prompt("check If a number is oven or odd");
if(number%2==0){
    console.log(number +" is even");
}
else{
    console.log(number+" is odd");
}

*/
//////////////////////////////////////////////////////////////////////////////////////////


/*

7- Write a program that take character from user then if it is vowel chars (a,e,i,o,u) then print vowel otherwise print consonant.
var character = window.prompt("Enter Character : ");
switch (character) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log("vowel");
    break;
  default:
    console.log("consonant");
}


*/
//////////////////////////////////////////////////////////////////////////////////////////
/*

8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u)
then print vowel otherwise print consonant

var character = window.prompt("Enter Character : ");
switch (character) {
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
  case 'A':
  case 'E':
  case 'I':
  case 'O':
  case 'U':
    console.log("Vowel");
    break;
  default:
    console.log("Consonant");
}


*/
//////////////////////////////////////////////////////////////////////////////////////////
/*

9- Write a program that allows user to insert integer then print all numbers between1to
that’s number
var Number = +window.prompt("Enter Number: ");
for (var i = 1; i <= Number; i++) {
  console.log(i);
}


*/
//////////////////////////////////////////////////////////////////////////////////////////

/*

10- Write a program that allows user to insert integer then print a multiplication table up to 12.
var Number = +window.prompt("Enter Number: ");

for(var i=0; i<=12; i++){
   
  console.log( Number+ "*" +i+ "="+Number*i)
}

*/
//////////////////////////////////////////////////////////////////////////////////////////
/*


11-Write a program that allows to user to insert number then print all even numbers between 1 to this number.
var Number = +window.prompt("Enter Number: ");
for (var i = 1; i <= Number; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}


*/
//////////////////////////////////////////////////////////////////////////////////////////

/*
12- Write a program that take two integers then print the power.
var integerNumber = +window.prompt("Enter integerNumber: ");
var Power = +window.prompt("Enter Power: ");
var result = 1;
for (var i = 1; i <= Power; i++) {
  result = integerNumber * integerNumber;
  result *= integerNumber;
}
console.log(integerNumber+"^"+Power+"="+result);


*/
//////////////////////////////////////////////////////////////////////////////////////////
/*


12- Write a program to enter marks of five subjects and calculate total, average and
percentage.
var subject1 = Number(window.prompt("Enter Degree of subject1: "));
var subject2 = Number(window.prompt("Enter Degree of subject2: "));
var subject3 = Number(window.prompt("Enter Degree of subject3: "));
var subject4 = Number(window.prompt("Enter Degree of subject4: "));
var subject5 = Number(window.prompt("Enter Degree of subject5: "));
total = subject1 + subject2 + subject3 + subject4 + subject5;
average = total / 5;
percentage = (total / 500) * 100;
console.log("Total= " + total);
console.log("Average= " + average);
console.log("Percentage= " + percentage +"%");


*/
//////////////////////////////////////////////////////////////////////////////////////////
/*

13-Write a program to input month number and print number of days in that
month.
var Number = +window.prompt("choose Month Number: ");
switch (Number) {
  case 1:
    console.log("Days in Month: 31");
    break;
  case 2:
    console.log("Days in Month: 28");
    break;
  case 3:
    console.log("Days in Month: 31");
    break;
  case 4:
    console.log("Days in Month: 30");
    break;
  case 5:
    console.log("Days in Month: 31");
    break;
  case 6:
    console.log("Days in Month: 30");
    break;
  case 7:
    console.log("Days in Month: 31");
    break;
  case 8:
    console.log("Days in Month: 31");
    break;
  case 9:
    console.log("Days in Month: 30");
    break;
  case 10:
    console.log("Days in Month: 31");
    break;
  case 11:
    console.log("Days in Month: 30");
    break;
  case 12:
    console.log("Days in Month: 31");
    break;

  default:
    console.log("This Month Is Not Found!");
    break;
}

*/
//////////////////////////////////////////////////////////////////////////////////////////

/*

14- Write a program to input marks of five subjects
Physics, Chemistry, Biology, Mathematics and Computer
, Find percentage and grade
var subject1 = Number(window.prompt("Enter Degree of English : "));
var subject2 = Number(window.prompt("Enter Degree of Physics : "));
var subject3 = Number(window.prompt("Enter Degree of Chemistry : "));
var subject4 = Number(window.prompt("Enter Degree of Mathematics : "));
var subject5 = Number(window.prompt("Enter Degree of Computer : "));
total = subject1 + subject2 + subject3 + subject4 + subject5;
precentage = (total / 500) * 100;
if (precentage <= 100 && precentage >= 95 ) {
  console.log("A+");
} else if (precentage < 90 && precentage >= 85) {
  console.log("A");
} else if (precentage < 85 && precentage >= 75) {
  console.log("B");
} else if (precentage < 75 && precentage >= 65) {
  console.log("C");
} else if (precentage < 65 && precentage >= 60) {
  console.log("D");
} else if (precentage < 60 && precentage >= 50) {
  console.log("E");
} else {
  console.log("F");
}
*/
//////////////////////////////////////////////////////////////////////////////////////////


/*

15-Write a program to input month number and print number of days in that
month.
var Number = +window.prompt("choose Month Number: ");
switch (Number) {
  case 1:
    console.log("Days in Month: 31");
    break;
  case 2:
    console.log("Days in Month: 28");
    break;
  case 3:
    console.log("Days in Month: 31");
    break;
  case 4:
    console.log("Days in Month: 30");
    break;
  case 5:
    console.log("Days in Month: 31");
    break;
  case 6:
    console.log("Days in Month: 30");
    break;
  case 7:
    console.log("Days in Month: 31");
    break;
  case 8:
    console.log("Days in Month: 31");
    break;
  case 9:
    console.log("Days in Month: 30");
    break;
  case 10:
    console.log("Days in Month: 31");
    break;
  case 11:
    console.log("Days in Month: 30");
    break;
  case 12:
    console.log("Days in Month: 31");
    break;

  default:
    console.log("This Month Is Not Found!");
    break;
}



*/

//////////////////////////////////////////////////////////////////////////////////////////

/*
16- Write a program that take character from user then if it is vowel chars (a,e,I,o,u)
then print vowel otherwise print consonant

var character = window.prompt("Enter Character : ");
switch (character) {
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
  case 'A':
  case 'E':
  case 'I':
  case 'O':
  case 'U':
    console.log("Vowel");
    break;
  default:
    console.log("Consonant");
}
*/
//////////////////////////////////////////////////////////////////////////////////////////

 /*
 
 17- Write a program to find maximum between two numbers.
var Number1 = +window.prompt("Enter Number1 : ");
var Number2 =+window.prompt("Enter Number2: ");
switch (true) {
  case Number1 > Number2:
    console.log("Max Number: " + Number1);
    break;
  case Number2 > Number1:
    console.log("Max Number: " + Number2);
    break;
  case Number2 == Number1:
    console.log(Number1 + " = " + Number2);
    break;

  default:
    console.log("ay 7aga");
    
} */
//////////////////////////////////////////////////////////////////////////////////////////

/*

18- Write a program to check whether a number is even or odd.
var Number = +window.prompt("Enter Number : ");
switch (Number % 2 == 0) {
  case true:
    console.log("even");
    break;
  case false:
    console.log("odd");
    break;
}


*/
//////////////////////////////////////////////////////////////////////////////////////////

/*

 19- Write a program to check whether a number is positive or negative or zero.
var Number = +window.prompt("Enter Number : ");
switch (Number > 0) {
  case true:
    console.log( Number+"  is Positive");
    break;
  case false:
    console.log( Number+"  is Negative");
    break;
}
*/
//////////////////////////////////////////////////////////////////////////////////////////
/*

20- Write a program to create Simple Calculator

var number1=+window.prompt("enter number1");
var operator =window.prompt("choose operator  (%,*,/,+,-)");
var number2=+window.prompt("enter number2");

   
    switch (operator) {
        case "*":
            answer = number1 * number2;
            console.log(answer)
            break;
        case "/":
            answer = number1 / number2;
            console.log(answer)
            break;
        case "+":
            answer = number1 + number2;
            console.log(answer)
            break;
        case "-":
            answer = number1 - number2;
            console.log(answer)
            break
        case "%":
            answer = number1 % number2;
            console.log(answer)
            break
            default:           
            console.log("error");
            break;
    }

*/