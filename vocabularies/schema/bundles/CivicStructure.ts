import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../lib/CivicStructure';
import { PlaceMixin } from '../lib/Place';

export const CivicStructureBundle = [
  CivicStructureMixin as Mixin,
  PlaceMixin as Mixin];
