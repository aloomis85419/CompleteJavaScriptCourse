var mark = {
    fullName:"John Smith",
    mass:150,
    height:72,
    calcBMI:function(){
        this.bmi = this.mass/(this.height*this.height);
    }
};

var john = {
    fullName:"Mark Smith",
    mass:160,
    height:73, 
    calcBMI:function(){
        this.bmi = this.mass/(this.height*this.height);
        return this.bmi;
    }
};
mark.calcBMI();
john.calcBMI();
console.log(mark.bmi);
console.log(john.bmi);
console.log(mark);
console.log(john);
