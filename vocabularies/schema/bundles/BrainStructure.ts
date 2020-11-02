import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AnatomicalStructureMixin } from '../AnatomicalStructure';
import { BrainStructureMixin } from '../BrainStructure';

export const BrainStructureBundle = [
  AnatomicalStructureMixin as Mixin,
  BrainStructureMixin as Mixin];
