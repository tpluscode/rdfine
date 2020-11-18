import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PlaceMixin } from '../lib/Place';
import { CivicStructureMixin } from '../lib/CivicStructure';

export const CivicStructureBundle = [
  PlaceMixin as Mixin,
  CivicStructureMixin as Mixin];
