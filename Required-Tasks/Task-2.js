'use strict'

function getBestStudent(obj){
    let max = 0;
    let k = 0;
    for (let score of Object.values(obj)){
        let avgScore = score.reduce(( a,b )=>{ return a+b })/score.length;
        if (max<avgScore){
            if (max > 0) k++;
            max = avgScore;
        }
    }
    return Object.keys(obj)[k];
}

console.log(getBestStudent({
    Bob: [100, 70, 80],
    John: [100, 90, 80],
    Arman: [50, 50, 50],
}));
