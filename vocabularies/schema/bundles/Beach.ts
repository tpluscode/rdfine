import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../lib/CivicStructure';
import { BeachMixin } from '../lib/Beach';

export const BeachBundle = [
  CivicStructureMixin as Mixin,
  BeachMixin as Mixin];
