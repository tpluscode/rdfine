import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BeachMixin } from '../lib/Beach';
import { CivicStructureMixin } from '../lib/CivicStructure';

export const BeachBundle = [
  BeachMixin as Mixin,
  CivicStructureMixin as Mixin];
