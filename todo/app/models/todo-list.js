import Model, { attr } from '@ember-data/model';

export default class TodoListModel extends Model {
  @attr('string') title;
  @attr('string') body;
  @attr('string') due;
}
