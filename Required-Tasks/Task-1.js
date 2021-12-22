'use strict'

const obj = {
    namePerson: [], // ['name', length][]
    get getName(){
        return this.namePerson;
    },
    set setName(value){
        this.namePerson.length = 0;
        let arr = value.split(', ');
        for (let i=0; i<arr.length; i++){
            let thisName = arr[i];
            let newPerson = new Array(thisName, thisName.length);
            this.namePerson.push(newPerson)
        }
    },
}

console.log(obj.namePerson);
obj.setName = 'Hovhannes, Sona';
console.log(obj.namePerson); // [ ['Hovhannes', 9], ['Sona', 4] ]
obj.setName = 'Tigran, Arman';
console.log(obj.namePerson); // [ [ 'Tigran', 6 ], [ 'Arman', 5 ] ]

console.log(obj.getName); // returns last given values