import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { VehicleMixin } from '../Vehicle';
import { BusOrCoachMixin } from '../BusOrCoach';
import { QuantitativeValueMixin } from '../QuantitativeValue';

export const BusOrCoachBundle = [
  VehicleMixin as Mixin,
  BusOrCoachMixin as Mixin,
  QuantitativeValueMixin as Mixin];
