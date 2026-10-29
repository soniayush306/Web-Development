const ob = {
    name: "Ayush",
    gender: "male",
    college: "lncts",
    age: "21",
    cgpa:"7.54",
    hight:"6''"
}

console.log(ob);
console.log(Object.keys(ob));
console.log(Object.values(ob));
console.log(Object.entries(ob));

const {name, college, cgpa} = ob;
console.log(college);
console.log(cgpa);
console.log(ob.age);


const arr = [10, 20, 30, 40, 50, 60]
console.log(...arr);

const arr2 = [4, 8, 9, ...arr, 66, 92, 108]
console.log(...arr2);
