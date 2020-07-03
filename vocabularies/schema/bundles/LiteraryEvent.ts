import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../Event';
import { LiteraryEventMixin } from '../LiteraryEvent';

export const LiteraryEventBundle = [
  EventMixin as Mixin,
  LiteraryEventMixin as Mixin];
