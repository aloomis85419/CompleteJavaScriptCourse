var marksWeight = 30;
var marksHeight = 40;
var johnsWeight = 50;
var johnsHeight = 60;

var BMImark = marksWeight/(marksHeight*marksHeight);
var BMIjohn = johnsWeight/(johnsHeight*johnsHeight);

var markHasGreaterBMI = BMImark > BMIjohn;

console.log("Is marks bmi greater than johns: "+markHasGreaterBMI);
