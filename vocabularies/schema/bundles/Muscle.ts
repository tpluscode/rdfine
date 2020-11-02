import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AnatomicalStructureMixin } from '../AnatomicalStructure';
import { MuscleMixin } from '../Muscle';
import { VesselMixin } from '../Vessel';
import { NerveMixin } from '../Nerve';

export const MuscleBundle = [
  AnatomicalStructureMixin as Mixin,
  MuscleMixin as Mixin,
  VesselMixin as Mixin,
  NerveMixin as Mixin];
