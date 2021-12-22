'use strict'

function getBestStudent(obj){
    let max = 0;
    let k = 0;
    let arr = Object.values(obj);
    for (let i=0; i<arr.length; i++){
        let avgScore = arr[i].reduce((a,b)=>{ return a+b })/arr[i].length;
        if (max<avgScore){
            max = avgScore;
            k = i;
        }
    }
    console.log(Object.keys(obj));
    return Object.keys(obj)[k];
}

console.log(getBestStudent({
    Gago: [100, 100, 100],
    Hakob: [100, 110, 112],
    Arman: [50, 50, 50],
    John: [100, 90, 80],
    Bob: [100, 70, 80],
}));
