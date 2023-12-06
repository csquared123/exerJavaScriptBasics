// string, numbers, boolean, null, undefined

const name= 'John';
const age= 30;


//Concatenation
console.log(' my name is ' + name + ' and I am '  + age);

//Template String
console.log(`My name is ${name} and I am ${age}`)


const s= 'Hello World'

console.log(s.length);

//Arrays- variables that hold multiple values

const numbers= new Array(1,2,3,4,5);
console.log(numbers);

const fruits= ['apples', 'oranges', 'pears'];

fruits[3]='grapes';
fruits.push('mangos');
fruits.unshift('strawberries');


console.log(fruits);




const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist app',
        isCompleted: false
    },
];

console.log(todos[1].text);


const todoJSON=JSON.stringify(todos);
console.log(todoJSON);

//For
for(let i = 0; i < 10; i++){
    console.log('For loop number: ${i}');
}

//While
let i = 0;
while(i < 10) {
    console.log('While loop number: ${i}');
    i++;
}

//forEach, map, filter
todos.forEach(function(todo){
    console.log(todo.text);
}
);

//map
const todoText= todos.map(function(todo) {
    return todo.text;
});

console.log(todoText);

//filter
const todoCompleted= todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
})

console.log(todoCompleted);

