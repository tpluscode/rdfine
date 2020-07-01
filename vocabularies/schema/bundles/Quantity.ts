import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { QuantityMixin } from '../Quantity';

export const QuantityBundle = [
  IntangibleMixin as Mixin,
  QuantityMixin as Mixin];
