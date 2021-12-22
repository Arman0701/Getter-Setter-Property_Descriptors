'use strict'

const getWeekOfMonth = (date) => {
    const d = new Date(date);
    return d.getDay()+1; // should be added 1 because there are days of the week in our
}                        //  country counted from Monday
const result = getWeekOfMonth(new Date('2017, 10, 9')); // parameters of Date constructor
console.log(result);                                    // should be as a string