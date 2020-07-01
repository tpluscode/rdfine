import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../CivicStructure';
import { TaxiStandMixin } from '../TaxiStand';

export const TaxiStandBundle = [
  CivicStructureMixin as Mixin,
  TaxiStandMixin as Mixin];
