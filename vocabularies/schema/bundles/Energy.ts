import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { QuantityMixin } from '../lib/Quantity';
import { EnergyMixin } from '../lib/Energy';

export const EnergyBundle = [
  QuantityMixin as Mixin,
  EnergyMixin as Mixin];
