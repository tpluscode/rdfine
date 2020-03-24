import { NamedNode } from 'rdf-js';
import { schema } from './lib/namespace';

export type EventStatusType = NamedNode;

export default {
  EventCancelled: schema.EventCancelled,
  EventMovedOnline: schema.EventMovedOnline,
  EventPostponed: schema.EventPostponed,
  EventRescheduled: schema.EventRescheduled,
  EventScheduled: schema.EventScheduled,
};
