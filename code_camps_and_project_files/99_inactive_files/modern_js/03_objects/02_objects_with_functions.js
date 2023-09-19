const myBook = {
        title: 'title string',
        author: 'author string',
        page: 888,
};

const otherBook = {
        title: 'other title string',
        author: 'other author string',
        page: 444,
};

const getSummary = book => {
        console.log(`${book.title} by ${book.author}`);
};

getSummary(myBook);
getSummary(otherBook);

const objSummary = book => ({
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.page} pages long`,
});

console.log(objSummary(myBook));
console.log(objSummary(otherBook));

/* CHALLENGE: create function that reurns object with all 3 degrees */

const convertDegree = far => ({
        celcius: Math.round((far - 32) * (5 / 9)),
        farenheit: far,
        kelvin: Math.round((far + 459.67) * (5 / 9)),
});

const degrees = convertDegree(32);

console.log(degrees.celcius);
