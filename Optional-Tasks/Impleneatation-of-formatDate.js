'use strict'

const formatDate = (date) => {
    let months = ['January', 'February', 'March', 'April',
                  'May', 'June', 'July', 'August', 'September',
                  'October', 'November', 'December'
    ];
    let m = date.getMonth();
    let d = date.getDate();
    let y = date.getFullYear();
    return `${d} ${months[m]} ${y}`
};

console.log("Actual output: ", formatDate(new Date("2020-05-14")));
console.log("Actual output: ", formatDate(new Date("2020-04-13")));
console.log("Actual output: ", formatDate(new Date("2021-05-24")));
console.log("Expected output", "14 May 2020"); // just for example