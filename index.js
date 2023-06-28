// function startFan(){
//     console.log("Press The Switch of Our Fan");
// }

// startFan();
// console.log("amar gorom lagse");
// startFan();

function bringSingara(taka){
    // console.log(taka);
    var priceOfSingara = 10;
    var qtyOfSingara = taka / priceOfSingara;
    // console.log(qtyOfSingara);
    return qtyOfSingara;
}

// console.log(bringSingara(100));
// var totalSingara = bringSingara(100);
// console.log(totalSingara);

function sumOfTwoNumbers(number1, number2){
    // console.log(number1, number2);
    var total = number1 + number2;
    // console.log(total);
    return total;
}

var result = sumOfTwoNumbers(1, 2);
// console.0log(result);

function multiplyOfNumbers(num1, num2, num3){
    // console.log(num1, num2, num3);
    var multiply = num1 * num2 * num3;
    // console.log(multiply);
    return multiply;
}

var result = multiplyOfNumbers(10, 20, 2);
var divide = result / 2;
// console.log(divide);

var student = {
    oderId: 4000,
    name: "Arafat", 
    gender: "Male",
    salary: "$1k"
}

// console.log(student);

var myPC = {
    brand: "HP",
    generation: "core i3 7th gen",
    ssd: "128GB", 
    HDD: "500GB",
    price: 200
}

// console.log(myPC);
// myPC.price = 20000;
myPC["price"] = 20000;
// console.log(myPC);

// var color = "red";
var color = "salmon";

// if(color == "yellow"){
//     console.log("The color is Yellow");
// }else if(color == "blue"){
//     console.log("The color is blue");
// }else if(color == "pink"){
//     console.log("The color is pink");
// }else if(color == "salmon"){
//     console.log("The color is salmon");
// }else if(color == "red"){
//     console.log("The color is red");
// }else {
//     console.log("The color is black");
// }

var color = "black";

// switch(color){
//     case "yellow":
//         console.log("The color is Yellow");
//         break;
//     case "blue":
//         console.log("The color is blue");
//         break;
//     case "pink":
//         console.log("The color is pink");
//         break;
//     case "black":
//         console.log("The color is black");
//         break;
//     default:
//         console.log("The color has no color");
// }

var numbers = [10, 20, 30, 40, 50];
for(var i=0; i<numbers.length; i++){
    if(numbers[i] == 30){
        // break;
        continue;
    }
    console.log(numbers[i]);
}