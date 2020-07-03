import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../CivicStructure';
import { PerformingArtsTheaterMixin } from '../PerformingArtsTheater';

export const PerformingArtsTheaterBundle = [
  CivicStructureMixin as Mixin,
  PerformingArtsTheaterMixin as Mixin];
