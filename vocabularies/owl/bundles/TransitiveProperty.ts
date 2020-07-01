import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ObjectPropertyMixin } from '../ObjectProperty';
import { TransitivePropertyMixin } from '../TransitiveProperty';

export const TransitivePropertyBundle = [
  ObjectPropertyMixin as Mixin,
  TransitivePropertyMixin as Mixin];
