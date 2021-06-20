import { NamedNode } from '@rdfjs/types';
import { schema } from './namespace';

export default {
  Friday: schema.Friday as NamedNode<'http://schema.org/Friday'>,
  Monday: schema.Monday as NamedNode<'http://schema.org/Monday'>,
  PublicHolidays: schema.PublicHolidays as NamedNode<'http://schema.org/PublicHolidays'>,
  Saturday: schema.Saturday as NamedNode<'http://schema.org/Saturday'>,
  Sunday: schema.Sunday as NamedNode<'http://schema.org/Sunday'>,
  Thursday: schema.Thursday as NamedNode<'http://schema.org/Thursday'>,
  Tuesday: schema.Tuesday as NamedNode<'http://schema.org/Tuesday'>,
  Wednesday: schema.Wednesday as NamedNode<'http://schema.org/Wednesday'>,
};

export type DayOfWeek =
  NamedNode<'http://schema.org/Friday'>
  | NamedNode<'http://schema.org/Monday'>
  | NamedNode<'http://schema.org/PublicHolidays'>
  | NamedNode<'http://schema.org/Saturday'>
  | NamedNode<'http://schema.org/Sunday'>
  | NamedNode<'http://schema.org/Thursday'>
  | NamedNode<'http://schema.org/Tuesday'>
  | NamedNode<'http://schema.org/Wednesday'>;
