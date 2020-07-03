import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AutomotiveBusinessMixin } from '../AutomotiveBusiness';
import { AutoRepairMixin } from '../AutoRepair';

export const AutoRepairBundle = [
  AutomotiveBusinessMixin as Mixin,
  AutoRepairMixin as Mixin];
