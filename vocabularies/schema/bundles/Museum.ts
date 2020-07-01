import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../CivicStructure';
import { MuseumMixin } from '../Museum';

export const MuseumBundle = [
  CivicStructureMixin as Mixin,
  MuseumMixin as Mixin];
