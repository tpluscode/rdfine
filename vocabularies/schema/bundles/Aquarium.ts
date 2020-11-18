import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../lib/CivicStructure';
import { AquariumMixin } from '../lib/Aquarium';

export const AquariumBundle = [
  CivicStructureMixin as Mixin,
  AquariumMixin as Mixin];
