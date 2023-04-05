import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AnatomicalStructureMixin } from '../lib/AnatomicalStructure';
import { BrainStructureMixin } from '../lib/BrainStructure';
import { MuscleMixin } from '../lib/Muscle';
import { NerveMixin } from '../lib/Nerve';
import { SuperficialAnatomyMixin } from '../lib/SuperficialAnatomy';

export const NerveBundle = [
  AnatomicalStructureMixin as Mixin,
  BrainStructureMixin as Mixin,
  MuscleMixin as Mixin,
  NerveMixin as Mixin,
  SuperficialAnatomyMixin as Mixin];
