import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AirportMixin } from '../lib/Airport';
import { CivicStructureMixin } from '../lib/CivicStructure';

export const AirportBundle = [
  AirportMixin as Mixin,
  CivicStructureMixin as Mixin];
