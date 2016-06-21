/**
 * Created by János on 2016.05.09..
 */

function AMPM(hour){
    var ampm ="";
    if(hour <= 12 ){
        ampm = "AM";
    }else{
        ampm = "PM";
    }

    return ampm;
}

function exercise_1_1(){
    var date = new Date();
    var day = date.getDay();
    var days = ["Sunday", "Monday", "Thuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


    //h:MM:ss TT --> 5:46:21 PM

    var toConsole = "Today is : " + days[day] + "\n";

    var hours = date.getHours();
    var ampm = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    if(hours >= 12){
        hours = hours - 12;
    }

    toConsole += 'Current time is : ' + hours + ' ' + AMPM(ampm) + ' : ' + minute + ' : ' + second;

    return console.log(toConsole);
}

function exercise_1_2(){
    window.print();
}

function exercise_1_3(){
    var date = new Date();
    var yyyy = date.getFullYear();
    var mm = date.getMonth() + 1;
    mm = '0' + mm;
    var dd = '0' + date.getDate();

    mm = mm.slice(-2);
    dd = dd.slice(-2);

    //mm-dd-yyyy
    console.log(mm + '-' + dd + '-' + yyyy+'\n');

    //dd-mm-yyyy
    console.log(dd + '-' + mm + '-' + yyyy+'\n');

}

function exercise_1_4(side1, side2, side3){
    /* need Heron  formula*/
    var halfPerimater = (side1 + side2 + side3) / 2;
    var underRooth = halfPerimater * (halfPerimater - side1) * (halfPerimater - side2) * (halfPerimater - side3);
    var triangleArea = Math.sqrt(underRooth);

    return console.log(triangleArea);
}

exercise_1_1();
//exercise_1_2();
exercise_1_3();
exercise_1_4(5,6,7);