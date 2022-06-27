import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CarMixin } from '../lib/Car';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';
import { VehicleMixin } from '../lib/Vehicle';

export const CarBundle = [
  CarMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  VehicleMixin as Mixin];
