import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../CivicStructure';
import { BeachMixin } from '../Beach';

export const BeachBundle = [
  CivicStructureMixin as Mixin,
  BeachMixin as Mixin];
