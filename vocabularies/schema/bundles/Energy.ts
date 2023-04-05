import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EnergyMixin } from '../lib/Energy';
import { QuantityMixin } from '../lib/Quantity';

export const EnergyBundle = [
  EnergyMixin as Mixin,
  QuantityMixin as Mixin];
