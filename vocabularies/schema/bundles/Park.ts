import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../CivicStructure';
import { ParkMixin } from '../Park';

export const ParkBundle = [
  CivicStructureMixin as Mixin,
  ParkMixin as Mixin];
