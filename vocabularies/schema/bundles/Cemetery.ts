import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../CivicStructure';
import { CemeteryMixin } from '../Cemetery';

export const CemeteryBundle = [
  CivicStructureMixin as Mixin,
  CemeteryMixin as Mixin];
