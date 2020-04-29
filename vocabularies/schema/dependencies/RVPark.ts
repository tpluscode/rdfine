import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../CivicStructure';
import { RVParkMixin } from '../RVPark';

export const RVParkDependencies = [
  CivicStructureMixin as Mixin,
  RVParkMixin as Mixin];
