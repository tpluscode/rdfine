import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ObjectPropertyMixin } from '../lib/ObjectProperty';
import { InverseFunctionalPropertyMixin } from '../lib/InverseFunctionalProperty';

export const InverseFunctionalPropertyBundle = [
  ObjectPropertyMixin as Mixin,
  InverseFunctionalPropertyMixin as Mixin];
