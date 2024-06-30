import { time } from "console";

export class Book {
    private title: string;
    private author: string;
    private comment: string;
    //private timelyGrading: number;

    constructor(title: string, author: string, comment: string) {
        this.title = title;
        this.author = author;
        this.comment = comment;
    }

    public getTitle() { return this.title }
    public getAuthor() { return this.author }
    public getComment() { return this.comment }
}