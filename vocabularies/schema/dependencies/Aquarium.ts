import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../CivicStructure';
import { AquariumMixin } from '../Aquarium';

export const AquariumDependencies = [
  CivicStructureMixin as Mixin,
  AquariumMixin as Mixin];
