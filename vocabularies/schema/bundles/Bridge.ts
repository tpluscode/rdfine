import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../CivicStructure';
import { BridgeMixin } from '../Bridge';

export const BridgeBundle = [
  CivicStructureMixin as Mixin,
  BridgeMixin as Mixin];
