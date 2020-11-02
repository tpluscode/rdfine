import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { VehicleMixin } from '../Vehicle';
import { MotorcycleMixin } from '../Motorcycle';

export const MotorcycleBundle = [
  VehicleMixin as Mixin,
  MotorcycleMixin as Mixin];
