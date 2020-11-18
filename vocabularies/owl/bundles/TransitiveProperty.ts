import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ObjectPropertyMixin } from '../lib/ObjectProperty';
import { TransitivePropertyMixin } from '../lib/TransitiveProperty';

export const TransitivePropertyBundle = [
  ObjectPropertyMixin as Mixin,
  TransitivePropertyMixin as Mixin];
