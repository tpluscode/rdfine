import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../lib/CivicStructure';
import { AirportMixin } from '../lib/Airport';

export const AirportBundle = [
  CivicStructureMixin as Mixin,
  AirportMixin as Mixin];
