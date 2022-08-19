import Service from '@ember/service';

export default class TodoService extends Service {
  reminderList = [];

  addReminder(entry) {
    this.reminderList = [...this.reminderList, entry];
  }

  removeReminder(index) {
    this.reminderList.splice(index, 1);
  }
}
