import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MotorcycleMixin } from '../lib/Motorcycle';
import { VehicleMixin } from '../lib/Vehicle';

export const MotorcycleBundle = [
  MotorcycleMixin as Mixin,
  VehicleMixin as Mixin];
