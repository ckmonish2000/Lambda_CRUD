import handler from './handler';
import dynamo from './db';

export default {
  handler: handler,
  db: dynamo,
  events: {},
}