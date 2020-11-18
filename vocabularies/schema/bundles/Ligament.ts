import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AnatomicalStructureMixin } from '../lib/AnatomicalStructure';
import { LigamentMixin } from '../lib/Ligament';

export const LigamentBundle = [
  AnatomicalStructureMixin as Mixin,
  LigamentMixin as Mixin];
