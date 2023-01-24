import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { NameMixin } from '../lib/Name';
import { PlaceMixin } from '../lib/Place';
import { PlaceNameMixin } from '../lib/PlaceName';

export const PlaceNameBundle = [
  NameMixin as Mixin,
  PlaceMixin as Mixin,
  PlaceNameMixin as Mixin];
