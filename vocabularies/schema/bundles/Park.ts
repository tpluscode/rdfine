import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../lib/CivicStructure';
import { ParkMixin } from '../lib/Park';

export const ParkBundle = [
  CivicStructureMixin as Mixin,
  ParkMixin as Mixin];
