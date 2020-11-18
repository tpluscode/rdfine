import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../lib/Event';
import { ChildrensEventMixin } from '../lib/ChildrensEvent';

export const ChildrensEventBundle = [
  EventMixin as Mixin,
  ChildrensEventMixin as Mixin];
