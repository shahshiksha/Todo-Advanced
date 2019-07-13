export class Todo {
    id: number;
    title = '';   // type inference
    complete = false;

    constructor( values: object = {}) {
        Object.assign(this, values);
    }
}