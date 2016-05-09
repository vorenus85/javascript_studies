/**
 * Created by János on 2016.04.27..
 */

function lesson_2_1(){

    var output = "";

    for (var i = 1; i <= 7; i++){
        output = output + "#";
        console.log(i + ": " + output + "\n");
    }
}

function lesson_2_2(){

    for (var i = 1; i<= 100; i++){

        if(i % 3 == 0 && i % 5 == 0){
            console.log("FizzBuzz");
        }
        else if(i % 3 == 0){
            console.log("Fizz");
        }
        else if(i % 5 == 0){
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}

function lesson_2_3 (size){

    for (var i = 1; i <= size; i++) { // line
        var output = "";
        for (var y = 1; y <= size; y++) {
            if(i % 2 == 0){
                if(y % 2 == 0){
                    output += " ";
                }else {
                    output += "#";
                }
            }else {
                if(y % 2 == 0){
                    output += "#";
                }else {
                    output += " ";
                }
            }
        }
        console.log(output + '\n');

    }
}

console.log("lesson 2.1\n");
lesson_2_1();

console.log("\n\n");

console.log("lesson 2.2\n");
lesson_2_2();

console.log("\n\n");
console.log("lesson 2.3\n");
lesson_2_3(8);
