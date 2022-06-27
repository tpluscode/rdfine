import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BusOrCoachMixin } from '../lib/BusOrCoach';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';
import { VehicleMixin } from '../lib/Vehicle';

export const BusOrCoachBundle = [
  BusOrCoachMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  VehicleMixin as Mixin];
