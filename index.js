var names = "Moas";
console.log("Hello World!\n" + "Welcome " + names);


person = {
    name: 'Soham',
    age: 20
}

console.log(person);

let selectedColor = ['red', 12.0];
selectedColor[2] = false;

console.log(selectedColor);
console.log(selectedColor.length);


function greet(firstName, lastName = ''){
    console.log('Hello ' + firstName + " " + lastName);
}

function square(number){
    return number * number;
}

greet('John');
greet('Sherlock' , 'Holmes');
console.log(square(2));
