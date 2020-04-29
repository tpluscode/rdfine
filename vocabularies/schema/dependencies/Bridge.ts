import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../CivicStructure';
import { BridgeMixin } from '../Bridge';

export const BridgeDependencies = [
  CivicStructureMixin as Mixin,
  BridgeMixin as Mixin];
