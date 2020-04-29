import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../Event';
import { ChildrensEventMixin } from '../ChildrensEvent';

export const ChildrensEventDependencies = [
  EventMixin as Mixin,
  ChildrensEventMixin as Mixin];
