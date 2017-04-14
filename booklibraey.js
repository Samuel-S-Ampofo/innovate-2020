//object representing a book with properties , title , body with a array of strings.


var tupac = {
	title: "he rose grew from concrate",
	body:[ "page1:Tupac was a rapper."," page2:He got famous one day."," page3:Then he died.","page4:the mystery begins... is he actually dead?"
	],
};


//another object representing a book with properties , title , body with a array of strings.

var biggysamll = {
	title: "My stories",
	body:[ "page1:out of broklyn","page2:made it to mainstreet","page3: killed by gangs sadly"],
};

// Part 3 Now, create a function that reads the book by first printing out the title, then printing out each element (page) in the body. For a book with title "Infinite Jest" and pages "Written by David Foster Wallace", "Hal Incandenza is the youngest of the Incandenza children.", and "As a child, he was very precocious.", the output should read as follows:

// Title: Infinite Jest
// Page 1: Written by David Foster Wallace
// Page 2: Hal Incandenza is the youngest of the Incandenza children.
// Page 3: As a child, he was very precocious.

// console.log("page " + counter + book.body[i])

//function definition
function bookLibrary(read){ 
	console.log("title:"read.title)

	console.log(read.body[i])

	for (var i = 0; i < body.length; i++){

	}
}
}

//function call
bookLibrary(tupac);
bookLibrary(biggysamll);
