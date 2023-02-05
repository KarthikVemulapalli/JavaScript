
console.log("********** JavaScript **********");

/* To Execute the below Script, follow below Steps:
	1. Install node.js in the system
	1. Install Microsoft Visual Studio Community
	2. Create a '.js' file.
	3. Write the code and save the file (save the code to execute latest file)
	3. Click on 'Terminal' present under View header menu
	4. Command Prompt terminal with path where file is saved should open.
	4. Execute the code using command 'node filename.js' and click on Enter. 
*/


/*		DataTypes		*/
console.log("********** JavaScript DataTypes **********");

let VarNumber = 45;			//DataType is Number
console.log("VarWithNumber DataType Is - " + typeof(VarNumber));

let VarString = "String";			//DataType is String
console.log("VarWithString DataType Is - " + typeof(VarString));

let VarBoolean = true;			//DataType is Boolean
console.log("VarWithBoolean DataType Is - " + typeof(VarBoolean));

let VarNull = null;			//DataType is Null
console.log("VarWithNull DataType Is - " + typeof(VarNull));

let VarUndefined;			//DataType is Undefined
console.log("VarNotAssigned DataType Is - " + typeof(VarUndefined));

/* 
The below same variable name Re-Declaring procedure with let and var is not possible. 
the below line will throw 'SyntaxError' stating Identifier is already declared.

var VarUniqueName = "Hello";
let VarUniqueName = 1000;
console.log("VarUniqueName DataType Is - " + typeof(VarUniqueName));
*/


/*		'var' vs 'let' vs const Keywords
var - Introduced Since Beginning, let & const - Introduced from ES6 Engine (Version)		*/
console.log("********** JavaScript var vs let vs const Keywords **********");

//We can Re-Declare and Re-Assign for variable with 'var' keyword
var VarVariable = "var Keyword";
console.log(VarVariable);
var VarVariable = "Re-Declaring 'var' Keyword"; //Re-Declaring
console.log(VarVariable);
VarVariable = true;								//Re-Assigning
console.log("Re-Assigned Value for 'var' Variable - " + VarVariable);

//We can Re-Assign value for variable with 'let' keyword
//We cannot Re-Declare variable with 'let' keyword
let LetVariable = "let Keyword";
console.log(LetVariable);
LetVariable = 100;								//Re-Assigning
console.log("Re-Assigned Value for 'let' Variable - " + LetVariable);

//We cannot Re-Declare or Re-Assign variable with 'const' keyword
const ConstVariable = "const Keyword";
console.log(ConstVariable);
/*
the below line will throw 'SyntaxError', because const variable has already been declared.
const ConstVariable = "Re-Declaring 'const' Keyword";

the below line will throw 'TypeError', because const variable initialization is already done.
ConstVariable = false;
*/