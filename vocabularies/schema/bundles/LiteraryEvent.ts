import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../lib/Event';
import { LiteraryEventMixin } from '../lib/LiteraryEvent';

export const LiteraryEventBundle = [
  EventMixin as Mixin,
  LiteraryEventMixin as Mixin];
