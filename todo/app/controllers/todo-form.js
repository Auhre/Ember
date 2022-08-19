import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class TodoFormController extends Controller {
  @service todo;

  @action
  titleChange(event) {
    this.title = event.target.value;
  }
  @action
  bodyChange(event) {
    this.body = event.target.value;
  }
  @action
  dueChange(event) {
    this.due = event.target.value;
  }
  @action
  saveReminder(event) {
    event.preventDefault();
    let today = new Date().toJSON().slice(0, 10);
    const title = this.title;
    const body = this.body;
    const due = this.due + ', ' + today;
    this.todo.addReminder({
      title,
      body,
      due,
    });
    this.title = '';
    this.body = '';
    this.due = '';
  }
}
