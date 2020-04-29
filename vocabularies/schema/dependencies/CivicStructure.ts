import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PlaceMixin } from '../Place';
import { CivicStructureMixin } from '../CivicStructure';

export const CivicStructureDependencies = [
  PlaceMixin as Mixin,
  CivicStructureMixin as Mixin];
