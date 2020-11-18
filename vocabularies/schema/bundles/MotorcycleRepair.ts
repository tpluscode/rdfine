import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AutomotiveBusinessMixin } from '../lib/AutomotiveBusiness';
import { MotorcycleRepairMixin } from '../lib/MotorcycleRepair';

export const MotorcycleRepairBundle = [
  AutomotiveBusinessMixin as Mixin,
  MotorcycleRepairMixin as Mixin];
