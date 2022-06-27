import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AnatomicalStructureMixin } from '../lib/AnatomicalStructure';
import { MuscleMixin } from '../lib/Muscle';
import { NerveMixin } from '../lib/Nerve';
import { VesselMixin } from '../lib/Vessel';

export const MuscleBundle = [
  AnatomicalStructureMixin as Mixin,
  MuscleMixin as Mixin,
  NerveMixin as Mixin,
  VesselMixin as Mixin];
