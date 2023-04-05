import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AnatomicalStructureMixin } from '../lib/AnatomicalStructure';
import { AnatomicalSystemMixin } from '../lib/AnatomicalSystem';
import { LymphaticVesselMixin } from '../lib/LymphaticVessel';
import { VesselMixin } from '../lib/Vessel';

export const LymphaticVesselBundle = [
  AnatomicalStructureMixin as Mixin,
  AnatomicalSystemMixin as Mixin,
  LymphaticVesselMixin as Mixin,
  VesselMixin as Mixin];
