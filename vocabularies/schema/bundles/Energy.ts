import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { QuantityMixin } from '../Quantity';
import { EnergyMixin } from '../Energy';

export const EnergyBundle = [
  QuantityMixin as Mixin,
  EnergyMixin as Mixin];
