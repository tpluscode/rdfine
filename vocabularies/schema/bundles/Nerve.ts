import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AnatomicalStructureMixin } from '../AnatomicalStructure';
import { NerveMixin } from '../Nerve';
import { MuscleMixin } from '../Muscle';
import { SuperficialAnatomyMixin } from '../SuperficialAnatomy';
import { BrainStructureMixin } from '../BrainStructure';

export const NerveBundle = [
  AnatomicalStructureMixin as Mixin,
  NerveMixin as Mixin,
  MuscleMixin as Mixin,
  SuperficialAnatomyMixin as Mixin,
  BrainStructureMixin as Mixin];
