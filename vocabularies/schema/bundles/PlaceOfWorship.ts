import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../lib/CivicStructure';
import { PlaceOfWorshipMixin } from '../lib/PlaceOfWorship';

export const PlaceOfWorshipBundle = [
  CivicStructureMixin as Mixin,
  PlaceOfWorshipMixin as Mixin];
