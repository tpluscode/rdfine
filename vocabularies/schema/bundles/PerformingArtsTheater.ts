import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../lib/CivicStructure';
import { PerformingArtsTheaterMixin } from '../lib/PerformingArtsTheater';

export const PerformingArtsTheaterBundle = [
  CivicStructureMixin as Mixin,
  PerformingArtsTheaterMixin as Mixin];
