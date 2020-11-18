import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../lib/CivicStructure';
import { ZooMixin } from '../lib/Zoo';

export const ZooBundle = [
  CivicStructureMixin as Mixin,
  ZooMixin as Mixin];
