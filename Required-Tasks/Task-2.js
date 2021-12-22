'use strict'

function getBestStudent(obj){
    let max = 0;
    let k = 0;
    for (let score of Object.values(obj)){
        console.log(score)
        let avgScore = score.reduce(( a,b )=>{ return a+b })/score.length;
        if (max<avgScore){
            if (max === 0) k = k;
            else {
                max = avgScore;
                k++;
            }
        }
    }
    return Object.keys(obj)[k];
}

console.log(getBestStudent({
    John: [100, 90, 80],
    Bob: [100, 70, 80],
}));
