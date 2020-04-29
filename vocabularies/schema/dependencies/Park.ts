import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../CivicStructure';
import { ParkMixin } from '../Park';

export const ParkDependencies = [
  CivicStructureMixin as Mixin,
  ParkMixin as Mixin];
