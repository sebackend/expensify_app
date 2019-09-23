// const person = {
//   name: 'Sebastian',
//   lastName: 'Meza',
//   age: 29,
//   location: {
//     city: 'Melipilla',
//     temp: 17
//   }
// }

// const { name: firstName = 'Hola', age } = person;
// const { city, temp: temperature } = person.location;


// console.log(`${firstName} is ${age}`);

// if (city && temperature) {
//   console.log(`It's ${temperature}°C in ${city}`);
// }

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);



// Array destructuring
const address = ['1299 Juniper Street', 'Philadelphia', 'Pensilvania', '19147'];

const [,city, state, zip] = address;

console.log(`You are in ${city}, ${state} (${zip})`);
