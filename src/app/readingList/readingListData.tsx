import { Book } from "./book";

/*
numerical valuation, 1)difficulty, 2)learned a lot, 3)enjoyed course, 4)timely grading
*/
export const readingListCollection: Book[] = new Array(
    new Book(
        "Benjamin Franklin: An American Life",
        "Walter Isaacson",
        "..."
    ),
    new Book(
        "Elon Musk",
        "Walter Isaacson",
        "Inspiring."
    ),
    new Book(
        "Zero to One",
        "Peter Thiel",
        "Provides perspective on innovation, business."
    ),
    new Book(
        "4 hour workweek",
        "Peter Thiel",
        "Provides perspective on life. Interesting at first, but timely grading is just mid."
    )
);