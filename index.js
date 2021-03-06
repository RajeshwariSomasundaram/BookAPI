const books =[
    {
        ISBN: "12345ONE",
        title: "Getting Started with MERN",
        authors: [1,2],
        language: "en",
        pubDate: "2021-07-07",
        numofPage: 225,
        category:["fiction","programming","tech","web dev"],
        publications: 1,
    },
    {
        ISBN: "12345Two",
        title: "Getting Started with Python",
        authors: [1,2],
        language: "en",
        pubDate: "2021-07-07",
        numofPage: 225,
        category:["fiction","programming","tech","web dev"],
        publications: 1,
    },
];

const authors =[
    {
        id: 1,
        name: "pavan",
        books: ["12345ONE", "12345Two"],
    },
    {
        id: 2,
        name: "Deepak",
        books: ["12345ONE"],
    },
];

const publications =[
    {
        id: 1,
        name: "chakra",
        books: ["12345ONE"],
    },
];

module.exports = {books, authors, publications};
