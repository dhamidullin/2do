export class Task {
    _id?: string;
    title: string;
    datetime: number;

    constructor() {
        this.title = '';
        this.datetime = null;
    }
}
