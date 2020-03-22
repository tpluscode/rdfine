import { NamedNode } from 'rdf-js';
import { schema } from './lib/namespace';

export type DayOfWeek = NamedNode;

export default {
  Friday: schema.Friday,
  Monday: schema.Monday,
  PublicHolidays: schema.PublicHolidays,
  Saturday: schema.Saturday,
  Sunday: schema.Sunday,
  Thursday: schema.Thursday,
  Tuesday: schema.Tuesday,
  Wednesday: schema.Wednesday,
};
