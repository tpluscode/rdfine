import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../CivicStructure';
import { ZooMixin } from '../Zoo';

export const ZooBundle = [
  CivicStructureMixin as Mixin,
  ZooMixin as Mixin];
