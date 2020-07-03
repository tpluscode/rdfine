import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../CivicStructure';
import { AirportMixin } from '../Airport';

export const AirportBundle = [
  CivicStructureMixin as Mixin,
  AirportMixin as Mixin];
