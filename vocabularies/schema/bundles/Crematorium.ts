import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../lib/CivicStructure';
import { CrematoriumMixin } from '../lib/Crematorium';

export const CrematoriumBundle = [
  CivicStructureMixin as Mixin,
  CrematoriumMixin as Mixin];
