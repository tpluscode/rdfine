import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { QuantityMixin } from '../Quantity';
import { MassMixin } from '../Mass';

export const MassDependencies = [
  QuantityMixin as Mixin,
  MassMixin as Mixin];
