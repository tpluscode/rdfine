import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../lib/CivicStructure';
import { RVParkMixin } from '../lib/RVPark';

export const RVParkBundle = [
  CivicStructureMixin as Mixin,
  RVParkMixin as Mixin];
