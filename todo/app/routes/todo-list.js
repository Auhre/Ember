import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class TodoListRoute extends Route {
  //@service store;
  model() {
    const todoList = [
      {
        title: 'Move Cabinet',
        body: 'Move the cabinet from the kitchen and relocate it to upper room',
        due: '4:00pm',
      },
      {
        title: 'Cook Impresive Adobo',
        body: 'Buy on the Market Ingredients and prepare for lunch',
        due: '10:00am',
      },
      {
        title: 'Take A Walk',
        body: 'Walk with your dog and have a great time',
        due: '5:00pm',
      },
    ];
    return todoList;
  }
}
