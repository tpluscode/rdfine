import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AutomotiveBusinessMixin } from '../AutomotiveBusiness';
import { MotorcycleRepairMixin } from '../MotorcycleRepair';

export const MotorcycleRepairBundle = [
  AutomotiveBusinessMixin as Mixin,
  MotorcycleRepairMixin as Mixin];
