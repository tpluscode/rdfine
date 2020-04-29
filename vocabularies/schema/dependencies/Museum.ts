import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../CivicStructure';
import { MuseumMixin } from '../Museum';

export const MuseumDependencies = [
  CivicStructureMixin as Mixin,
  MuseumMixin as Mixin];
