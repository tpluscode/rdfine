import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ObjectMixin } from '../lib/Object';
import { PlaceMixin } from '../lib/Place';

export const PlaceBundle = [
  ObjectMixin as Mixin,
  PlaceMixin as Mixin];
