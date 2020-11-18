import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { VehicleMixin } from '../lib/Vehicle';
import { BusOrCoachMixin } from '../lib/BusOrCoach';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';

export const BusOrCoachBundle = [
  VehicleMixin as Mixin,
  BusOrCoachMixin as Mixin,
  QuantitativeValueMixin as Mixin];
