import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { InverseFunctionalPropertyMixin } from '../lib/InverseFunctionalProperty';
import { ObjectPropertyMixin } from '../lib/ObjectProperty';

export const InverseFunctionalPropertyBundle = [
  InverseFunctionalPropertyMixin as Mixin,
  ObjectPropertyMixin as Mixin];
