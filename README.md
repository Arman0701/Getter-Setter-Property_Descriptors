# Required Tasks
---
- Write an object with field name.

```javascript
  const obj = {
    name: [], // ['name', length][]
    set name,
    get name,
  }

  console.log(obj.name)

  obj.name = 'Hovhannes, Sona';

  console.log(obj.name) // [['Hovhannes', 9], ['Sona', 4]]
```

[Solution](https://github.com/Arman0701/Getter-Setter-Property_Descriptors/blob/master/Required-Tasks/Task-1.js)

---

- The input is object, which `keys` are student's names and `values` are `array` of their scores. Find the student with the best average score.

```javascript
getBestStudent({
  John: [100, 90, 80],
  Bob: [100, 70, 80],
});
// OUTPUT => "John"

// John's avg = 90
// Bob's avg = 83.33
```

[Solution](https://github.com/Arman0701/Getter-Setter-Property_Descriptors/blob/master/Required-Tasks/Task-2.js)

---

# Optional Tasks
---

## Date tasks

- Create a function that, given 2 dates, returns the names of the months that are present between them (inclusive).

_(Notice that January is not duplicated!)_

- The month names returned by the function should be sorted (not alphabetically, but ordered by which comes first (January = 1st month, February = 2nd month, … , December = 12th month))
- The function should produce the same output even if dateStart is greater than dateEnd

| Input                                                                                                                    | Output                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| let january = new Date(2017, 0, 1); let march = new Date(2017, 2, 1); monthsInterval(january, march)                     | ['January', 'February', March']                                                                                            |
| let december = new Date(2017, 11, 1); let january = new Date(2018, 0, 1); monthsInterval(december, january)              | ['January', 'December']                                                                                                    |
| let january2017 = new Date(2017, 0, 1); let january2018 = new Date(2018, 0, 1); monthsInterval(january2017, january2018) | ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] |

[Solution]()

---

- Each year has 365 or 366 days. Given a string date representing a Gregorian calendar date formatted as month/day/year, return the day-number of the year.
  _All input strings in the tests are valid dates._

| Input                   | Output |
| ----------------------- | ------ |
| dayOfYear("12/13/2020") | 348    |
| dayOfYear("12/17/2020") | 352    |
| dayOfYear("11/16/2020") | 321    |
| dayOfYear("1/9/2019")   | 9      |
| dayOfYear("3/1/2004")   | 61     |
| dayOfYear("12/31/2000") | 366    |

[Solution](https://github.com/Arman0701/Getter-Setter-Property_Descriptors/blob/master/Optional-Tasks/dayOfYear.js)

---

- Write a function that, given a date (in the format MM/DD/YYYY), returns the day of the week as a string. Each day name must be one of the following strings: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", or "Saturday".

To illustrate, the day of the week for "12/07/2016" is "Wednesday".

[Solution]()

---

- This challenge assumes the week starts on Sunday.\*

| Input                | Output      |
| -------------------- | ----------- |
| getDay("12/07/2016") | "Wednesday" |
| getDay("09/04/2016") | "Sunday"    |
| getDay("12/08/2011") | "Thursday"  |

[Solution](https://github.com/Arman0701/Getter-Setter-Property_Descriptors/blob/master/Optional-Tasks/getDay.js)

---

- Implement following function

```javascript
const formatDate = (date) => {
  return date;
};

console.log("Actual output: ", formatDate(new Date("2020-05-14")));
console.log("Expected output", "14 May 2020");
```

[Solution](https://github.com/Arman0701/Getter-Setter-Property_Descriptors/blob/master/Optional-Tasks/Impleneatation-of-formatDate.js)

---

- Implement following function

```javascript
const getWeekOfMonth = () => {};

const result = getWeekOfMonth(new Date(2017, 10, 9));
// => 2
```

[Solution](https://github.com/Arman0701/Getter-Setter-Property_Descriptors/blob/master/Optional-Tasks/getWeekOfMonth-implementation.js)

---