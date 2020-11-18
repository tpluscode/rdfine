import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../lib/CivicStructure';
import { CemeteryMixin } from '../lib/Cemetery';

export const CemeteryBundle = [
  CivicStructureMixin as Mixin,
  CemeteryMixin as Mixin];
