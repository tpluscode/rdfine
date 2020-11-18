import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../lib/Event';
import { FoodEventMixin } from '../lib/FoodEvent';

export const FoodEventBundle = [
  EventMixin as Mixin,
  FoodEventMixin as Mixin];
