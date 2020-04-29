import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../CivicStructure';
import { PerformingArtsTheaterMixin } from '../PerformingArtsTheater';

export const PerformingArtsTheaterDependencies = [
  CivicStructureMixin as Mixin,
  PerformingArtsTheaterMixin as Mixin];
