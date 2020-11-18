import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { VehicleMixin } from '../lib/Vehicle';
import { MotorcycleMixin } from '../lib/Motorcycle';

export const MotorcycleBundle = [
  VehicleMixin as Mixin,
  MotorcycleMixin as Mixin];
