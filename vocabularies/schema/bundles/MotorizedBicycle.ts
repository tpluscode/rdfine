import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MotorizedBicycleMixin } from '../lib/MotorizedBicycle';
import { VehicleMixin } from '../lib/Vehicle';

export const MotorizedBicycleBundle = [
  MotorizedBicycleMixin as Mixin,
  VehicleMixin as Mixin];
