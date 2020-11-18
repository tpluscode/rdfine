import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AnatomicalStructureMixin } from '../lib/AnatomicalStructure';
import { MuscleMixin } from '../lib/Muscle';
import { VesselMixin } from '../lib/Vessel';
import { NerveMixin } from '../lib/Nerve';

export const MuscleBundle = [
  AnatomicalStructureMixin as Mixin,
  MuscleMixin as Mixin,
  VesselMixin as Mixin,
  NerveMixin as Mixin];
