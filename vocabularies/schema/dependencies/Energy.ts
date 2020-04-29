import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { QuantityMixin } from '../Quantity';
import { EnergyMixin } from '../Energy';

export const EnergyDependencies = [
  QuantityMixin as Mixin,
  EnergyMixin as Mixin];
