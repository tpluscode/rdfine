import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../lib/CivicStructure';
import { MuseumMixin } from '../lib/Museum';

export const MuseumBundle = [
  CivicStructureMixin as Mixin,
  MuseumMixin as Mixin];
