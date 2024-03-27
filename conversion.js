// JavaScript Type Conversion

console.log(Number("3.14"))
console.log(Number(Math.PI))
console.log(Number(" "))
console.log(Number(""))

console.log(Number("99 88"))
console.log(Number("John"))

console.log(parseInt("3.14"))
console.log(parseFloat("3.14"))
console.log("======================================")

// let y = "5";
// let x = + y;
// console.log(typeof x)
// console.log(x)
// console.log(typeof y)

let x = 123;
console.log(String(x))
console.log( String(123))
console.log(String(100 + 23))
console.log("======================================")
console.log(x.toString())
console.log((123).toString())
console.log((100 + 23).toString())

console.log("======================================")

console.log(x.toExponential()) // Returns a string, with a number rounded and written using exponential notation.
console.log((123).toFixed()) // Returns a string, with a number rounded and written with a specified number of decimals.
console.log((100 + 23).toPrecision()) // Returns a string, with a number written with a specified length


// Converting Dates to Numbers
d = new Date();

console.log(Number(d))
console.log(d.getTime())

// Converting Dates to Strings

console.log(String(Date()))
console.log(Date().toString())

// Method	        Description
// getDate()	    Get the day as a number (1-31)
// getDay()	        Get the weekday a number (0-6)
// getFullYear()    Get the four digit year (yyyy)
// getHours()	    Get the hour (0-23)
// getMilliseconds()Get the milliseconds (0-999)
// getMinutes()	    Get the minutes (0-59)
// getMonth()	    Get the month (0-11)
// getSeconds()	    Get the seconds (0-59)
// getTime()	    Get the time (milliseconds since January 1, 1970)

// Converting Booleans to Numbers

console.log(Number(false))
console.log(Number(true))

// Converting Booleans to Strings
console.log(String(false))
console.log(String(true))

console.log(false.toString())
console.log(true.toString())

// Automatic Type Conversion
console.log(5 + null)
console.log("5" + null)
console.log("5" + 2)
console.log("5" - 2)
console.log("5" * "2")

console.log(String(0))


// if myVar = {name:"Fjohn"}  // toString converts to "[object Object]"
// if myVar = [1,2,3,4]       // toString converts to "1,2,3,4"
// if myVar = new Date()      // toString converts to "Fri Jul 18 2014 09:08:55 GMT+0200"

// if myVar = 123             // toString converts to "123"
// if myVar = true            // toString converts to "true"
// if myVar = false           // toString converts to "false"

// JavaScript Type Conversion Table
// This table shows the result of converting different JavaScript values to Number, String, and Boolean:

// Original     Converted       Converted       Converted
// Value	    to Number       to String       to Boolean

// false	        0	        "false"	        false	
// true	            1           "true"	        true	
// 0	            0	            "0"	        false	
// 1	            1	            "1"	        true	
// "0"	            0	            "0"	        true	
// "000"	        0	           "000"	    true	
// "1"	            1	            "1"	        true	
// NaN	            NaN	            "NaN"	    false	
// Infinity	    Infinity	    "Infinity"	    true	
// -Infinity	-Infinity	    "-Infinity"	    true	
// ""	            0	            ""	        false	
// "20"	            20	            "20"	    true	
// "twenty"	        NaN	           "twenty" 	true	
// [ ]	            0	                ""      true	
// [20]	            20	               "20" 	true	
// [10,20]	        NaN	           "10, 20"     true	
// ["twenty"]	    NaN	            "twenty"	true	
// ["ten","twenty"]	NaN	         "ten,twenty"	true	
// function(){}	    NaN	        "function(){}"	true	
// { }	            NaN	    "[object Object]"	true	
// null	            0	                "null"	false	
// undefined	    NaN	        "undefined"	    false

