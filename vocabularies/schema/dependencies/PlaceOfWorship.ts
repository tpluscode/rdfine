import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../CivicStructure';
import { PlaceOfWorshipMixin } from '../PlaceOfWorship';

export const PlaceOfWorshipDependencies = [
  CivicStructureMixin as Mixin,
  PlaceOfWorshipMixin as Mixin];
