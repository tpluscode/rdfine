import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AnatomicalStructureMixin } from '../lib/AnatomicalStructure';
import { VesselMixin } from '../lib/Vessel';

export const VesselBundle = [
  AnatomicalStructureMixin as Mixin,
  VesselMixin as Mixin];
