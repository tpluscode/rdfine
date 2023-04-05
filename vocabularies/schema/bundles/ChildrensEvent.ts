import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ChildrensEventMixin } from '../lib/ChildrensEvent';
import { EventMixin } from '../lib/Event';

export const ChildrensEventBundle = [
  ChildrensEventMixin as Mixin,
  EventMixin as Mixin];
