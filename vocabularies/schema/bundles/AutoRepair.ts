import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AutomotiveBusinessMixin } from '../lib/AutomotiveBusiness';
import { AutoRepairMixin } from '../lib/AutoRepair';

export const AutoRepairBundle = [
  AutomotiveBusinessMixin as Mixin,
  AutoRepairMixin as Mixin];
