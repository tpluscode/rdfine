import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { VehicleMixin } from '../lib/Vehicle';
import { CarMixin } from '../lib/Car';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';

export const CarBundle = [
  VehicleMixin as Mixin,
  CarMixin as Mixin,
  QuantitativeValueMixin as Mixin];
