import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { VesselMixin } from '../Vessel';
import { LymphaticVesselMixin } from '../LymphaticVessel';
import { AnatomicalStructureMixin } from '../AnatomicalStructure';
import { AnatomicalSystemMixin } from '../AnatomicalSystem';

export const LymphaticVesselBundle = [
  VesselMixin as Mixin,
  LymphaticVesselMixin as Mixin,
  AnatomicalStructureMixin as Mixin,
  AnatomicalSystemMixin as Mixin];
