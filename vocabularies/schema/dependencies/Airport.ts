import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../CivicStructure';
import { AirportMixin } from '../Airport';

export const AirportDependencies = [
  CivicStructureMixin as Mixin,
  AirportMixin as Mixin];
