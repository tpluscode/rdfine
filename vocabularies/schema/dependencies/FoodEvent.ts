import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../Event';
import { FoodEventMixin } from '../FoodEvent';

export const FoodEventDependencies = [
  EventMixin as Mixin,
  FoodEventMixin as Mixin];
