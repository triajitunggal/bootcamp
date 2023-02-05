const prompt = require('prompt-sync')({sigint: true});
const num1 = prompt('Enter a number: ');
var a = Math.sqrt(num1);
if(num1 <= 0){
 console.log("Tidak bisa input bilangan negatif")
}else if(num1 % 2 == 1){
    console.log("Tidak bisa input bilangan ganjil")
}else{
    console.log(a);
}



