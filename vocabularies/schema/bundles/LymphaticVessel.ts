import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { VesselMixin } from '../lib/Vessel';
import { LymphaticVesselMixin } from '../lib/LymphaticVessel';
import { AnatomicalStructureMixin } from '../lib/AnatomicalStructure';
import { AnatomicalSystemMixin } from '../lib/AnatomicalSystem';

export const LymphaticVesselBundle = [
  VesselMixin as Mixin,
  LymphaticVesselMixin as Mixin,
  AnatomicalStructureMixin as Mixin,
  AnatomicalSystemMixin as Mixin];
