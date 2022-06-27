import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CemeteryMixin } from '../lib/Cemetery';
import { CivicStructureMixin } from '../lib/CivicStructure';

export const CemeteryBundle = [
  CemeteryMixin as Mixin,
  CivicStructureMixin as Mixin];
