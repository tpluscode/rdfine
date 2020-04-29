import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AutomotiveBusinessMixin } from '../AutomotiveBusiness';
import { MotorcycleRepairMixin } from '../MotorcycleRepair';

export const MotorcycleRepairDependencies = [
  AutomotiveBusinessMixin as Mixin,
  MotorcycleRepairMixin as Mixin];
