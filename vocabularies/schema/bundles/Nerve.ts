import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AnatomicalStructureMixin } from '../lib/AnatomicalStructure';
import { NerveMixin } from '../lib/Nerve';
import { MuscleMixin } from '../lib/Muscle';
import { SuperficialAnatomyMixin } from '../lib/SuperficialAnatomy';
import { BrainStructureMixin } from '../lib/BrainStructure';

export const NerveBundle = [
  AnatomicalStructureMixin as Mixin,
  NerveMixin as Mixin,
  MuscleMixin as Mixin,
  SuperficialAnatomyMixin as Mixin,
  BrainStructureMixin as Mixin];
