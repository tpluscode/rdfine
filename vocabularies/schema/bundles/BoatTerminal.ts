import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../lib/CivicStructure';
import { BoatTerminalMixin } from '../lib/BoatTerminal';

export const BoatTerminalBundle = [
  CivicStructureMixin as Mixin,
  BoatTerminalMixin as Mixin];
