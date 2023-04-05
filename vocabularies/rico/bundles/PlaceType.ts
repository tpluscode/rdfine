import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PlaceMixin } from '../lib/Place';
import { PlaceTypeMixin } from '../lib/PlaceType';
import { TypeMixin } from '../lib/Type';

export const PlaceTypeBundle = [
  PlaceMixin as Mixin,
  PlaceTypeMixin as Mixin,
  TypeMixin as Mixin];
