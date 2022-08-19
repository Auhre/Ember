import Component from '@glimmer/component';

//import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class CounterComponent extends Component {
  //@tracked count = 0;
  @service todo;

  @action
  del(index) {
    this.todo.removeReminder(index);
  }
}
