import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PlaceMixin } from '../Place';
import { CivicStructureMixin } from '../CivicStructure';

export const CivicStructureBundle = [
  PlaceMixin as Mixin,
  CivicStructureMixin as Mixin];
