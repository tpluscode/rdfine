import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BridgeMixin } from '../lib/Bridge';
import { CivicStructureMixin } from '../lib/CivicStructure';

export const BridgeBundle = [
  BridgeMixin as Mixin,
  CivicStructureMixin as Mixin];
