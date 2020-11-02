import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { VehicleMixin } from '../Vehicle';
import { CarMixin } from '../Car';
import { QuantitativeValueMixin } from '../QuantitativeValue';

export const CarBundle = [
  VehicleMixin as Mixin,
  CarMixin as Mixin,
  QuantitativeValueMixin as Mixin];
