///////////////////////////////////////
// Lecture: Hoisting
/*
calculateAge(1990);

function calculateAge(year){
    console.log(2018 - year);
}

retirement(19965);
var retirement = function(year){
    console.log(65 - (2018 - year));
}


console.log(age);
var age = 23;
*/
///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword

console.log(this);

function calculateAge(year) {
    console.log(2018 - year);
    console.log(this);
    //prints the default window object as well
}

var john = {
    name: "john",
    yearOfBirth : 1990,
    calculateAge: function () {
        console.log(this);
        console.log(2016 - this.yearOfBirth);

        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    }
}

john.calculateAge();

var mike = {
    name:'Mike',
    yearOfBirth:1984
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();
