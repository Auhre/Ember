import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class CounterComponent extends Component {
  
  @service todo;

  @action
  del(index) {
    this.todo.removeReminder(index);
  }
}
