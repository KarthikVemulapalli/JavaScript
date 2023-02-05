/*		Conditions & Loops		*/
console.log("********** JavaScript Conditions & Loops **********");

//If Condition
var IfVariable = 20;
if (IfVariable>=10) { 
	console.log("If Statement")
} else if (IfVariable<10 && IfVariable>5) {
	console.log("Else-If Statement")
} else { 
	console.log("Else Statement")
}

//While Loop
let WhileFlag = 1;
while(WhileFlag<5){
	WhileFlag++;
}
console.log("Value of WhileFlag after while loop - "+WhileFlag);

//Do While Loop
var DoWhileFlag = 0;
do{
	//This block of code gets executed irrespective of while condition is False or True
	console.log("Value of DoWhileFlag Before entering While Loop - "+DoWhileFlag);
	DoWhileFlag++;
} while (DoWhileFlag<=2);

console.log("Value of DoWhileFlag after DoWhile Loop - "+ DoWhileFlag);

//For loop
let ForFlag
for (ForFlag=0; ForFlag<4; ForFlag++){
	if(ForFlag==3){
		break;
	}
}
console.log("Value of ForFlag after For Loop - "+ ForFlag);