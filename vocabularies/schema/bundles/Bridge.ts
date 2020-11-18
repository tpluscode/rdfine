import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../lib/CivicStructure';
import { BridgeMixin } from '../lib/Bridge';

export const BridgeBundle = [
  CivicStructureMixin as Mixin,
  BridgeMixin as Mixin];
