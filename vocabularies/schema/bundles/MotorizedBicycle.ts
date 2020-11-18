import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { VehicleMixin } from '../lib/Vehicle';
import { MotorizedBicycleMixin } from '../lib/MotorizedBicycle';

export const MotorizedBicycleBundle = [
  VehicleMixin as Mixin,
  MotorizedBicycleMixin as Mixin];
