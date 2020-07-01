import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { VehicleMixin } from '../Vehicle';
import { CarMixin } from '../Car';

export const CarBundle = [
  VehicleMixin as Mixin,
  CarMixin as Mixin];
