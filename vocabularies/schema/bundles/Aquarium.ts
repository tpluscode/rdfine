import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../CivicStructure';
import { AquariumMixin } from '../Aquarium';

export const AquariumBundle = [
  CivicStructureMixin as Mixin,
  AquariumMixin as Mixin];
