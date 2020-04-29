import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { VehicleMixin } from '../Vehicle';
import { CarMixin } from '../Car';

export const CarDependencies = [
  VehicleMixin as Mixin,
  CarMixin as Mixin];
