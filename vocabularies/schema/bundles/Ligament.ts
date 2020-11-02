import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AnatomicalStructureMixin } from '../AnatomicalStructure';
import { LigamentMixin } from '../Ligament';

export const LigamentBundle = [
  AnatomicalStructureMixin as Mixin,
  LigamentMixin as Mixin];
