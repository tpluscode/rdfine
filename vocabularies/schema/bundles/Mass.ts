import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { QuantityMixin } from '../lib/Quantity';
import { MassMixin } from '../lib/Mass';

export const MassBundle = [
  QuantityMixin as Mixin,
  MassMixin as Mixin];
