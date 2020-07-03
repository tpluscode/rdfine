import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../CivicStructure';
import { RVParkMixin } from '../RVPark';

export const RVParkBundle = [
  CivicStructureMixin as Mixin,
  RVParkMixin as Mixin];
