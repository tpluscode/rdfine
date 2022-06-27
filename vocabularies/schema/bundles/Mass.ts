import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MassMixin } from '../lib/Mass';
import { QuantityMixin } from '../lib/Quantity';

export const MassBundle = [
  MassMixin as Mixin,
  QuantityMixin as Mixin];
