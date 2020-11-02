import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { VehicleMixin } from '../Vehicle';
import { MotorizedBicycleMixin } from '../MotorizedBicycle';

export const MotorizedBicycleBundle = [
  VehicleMixin as Mixin,
  MotorizedBicycleMixin as Mixin];
