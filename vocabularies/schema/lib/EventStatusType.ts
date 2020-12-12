import { NamedNode } from 'rdf-js';
import { schema } from './namespace';

export default {
  EventCancelled: schema.EventCancelled as NamedNode<'http://schema.org/EventCancelled'>,
  EventMovedOnline: schema.EventMovedOnline as NamedNode<'http://schema.org/EventMovedOnline'>,
  EventPostponed: schema.EventPostponed as NamedNode<'http://schema.org/EventPostponed'>,
  EventRescheduled: schema.EventRescheduled as NamedNode<'http://schema.org/EventRescheduled'>,
  EventScheduled: schema.EventScheduled as NamedNode<'http://schema.org/EventScheduled'>,
};

export type EventStatusType =
  NamedNode<'http://schema.org/EventCancelled'>
  | NamedNode<'http://schema.org/EventMovedOnline'>
  | NamedNode<'http://schema.org/EventPostponed'>
  | NamedNode<'http://schema.org/EventRescheduled'>
  | NamedNode<'http://schema.org/EventScheduled'>;
