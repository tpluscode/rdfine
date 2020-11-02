import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AnatomicalStructureMixin } from '../AnatomicalStructure';
import { VesselMixin } from '../Vessel';

export const VesselBundle = [
  AnatomicalStructureMixin as Mixin,
  VesselMixin as Mixin];
