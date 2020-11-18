import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../lib/CivicStructure';
import { TaxiStandMixin } from '../lib/TaxiStand';

export const TaxiStandBundle = [
  CivicStructureMixin as Mixin,
  TaxiStandMixin as Mixin];
