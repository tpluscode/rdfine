import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AquariumMixin } from '../lib/Aquarium';
import { CivicStructureMixin } from '../lib/CivicStructure';

export const AquariumBundle = [
  AquariumMixin as Mixin,
  CivicStructureMixin as Mixin];
