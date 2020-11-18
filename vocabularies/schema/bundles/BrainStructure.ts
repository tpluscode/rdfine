import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AnatomicalStructureMixin } from '../lib/AnatomicalStructure';
import { BrainStructureMixin } from '../lib/BrainStructure';

export const BrainStructureBundle = [
  AnatomicalStructureMixin as Mixin,
  BrainStructureMixin as Mixin];
