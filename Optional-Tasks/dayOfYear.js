'use strict'

function checkLeapYear(year) {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return true;
    }
    return false;
}

function dayOfYear(date){
    let [m, d, y] = date.split('/');
    m = +m; d = +d; y = +y;
    let result = 0;
    for (let i=0; i<m-1; i++){
        if (i === 1){
            if (checkLeapYear(y)) result += 29;
            else result += 28;
        }
        else result += i % 2 === 0 ? 31 : 30;
    }
    result += d;
    return result;
}  

console.log(dayOfYear("12/13/2020"));
console.log(dayOfYear("12/17/2020"));
console.log(dayOfYear("11/16/2020"));
console.log(dayOfYear("1/9/2019"));
console.log(dayOfYear("3/1/2004"));
console.log(dayOfYear("12/31/2000"));