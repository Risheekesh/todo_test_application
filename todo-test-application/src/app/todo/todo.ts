export class Todo {
    id: number;
    title: string = '';
    color: string = '';
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}
