const myBook = {
        title: 'title string',
        author: 'author string',
        page: 888,
};
console.log(myBook.title);
myBook.title = 'sw books';
console.log(myBook.title);

/* CHALLENGE: create person & generate string */

const myPerson = {
        name: 'Jason',
        age: 104,
        location: 'San Diego',
};

console.log(`${myPerson.name} is ${myPerson.age} years old and lives in ${myPerson.location}`);
