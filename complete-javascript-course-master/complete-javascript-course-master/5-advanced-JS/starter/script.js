//Functions constructor

var john = {
    name:"John",
    yearOfBirth: 1996,
    job: 'teacher'
};


var Person = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function(){
        console.log(2019-this.yearOfBirth)
    }
}

Person.prototype.lastName = "Smith";

Person.prototype.calculateAge = function(){
  console.log(2016 - this.yearOfBirth);
};

var john = new Person("john",1990,"teacher");
var jane = new Person("john",1999,"teacher");
var joe = new Person("john",1969,"teacher");


john.calculateAge();
jane.calculateAge();
joe.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(joe.lastName);

//Object.create method

var personProto = {
    calculateAge : function(){
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = "John";
john.yearOfBirth = 1990;
john.job = "teacher";

var jane = Object.create(personProto,
{
    name: {value : "Jane"},
    yearOfBirth: {value: 1969},
    job: {value:"designer"}
});

//Passing functions as arguments

var years = [1990,1965,1937,2005,1998];

function arrayCalc(arr,fn){
    var arrRes = [];
    for(var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2016 - el;
}


var ages = arrayCalc([1990,1965,1937,2005,1998],calculateAge);

console.log(ages);

function isFullAge(){
    if(el >= 18 && el <= 81){
        return el >= 18;
    }
    else{
        return -1;
    }
}

function maxHeartRate(el){
    return Math.round(206.9 - (.67 + el));
}

var fullAges = arrayCalc(years,isFullAge);

console.log(ages);

//Functions returning other functions

function interviewQuestion(job){
    if(job === "designer"){
        return function(name){
            console.log(name + "can you please explain what ux design is?");
        }
    }
    if(job == "teacher"){
        console.log()
    }
}




