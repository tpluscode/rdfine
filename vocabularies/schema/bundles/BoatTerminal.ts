import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BoatTerminalMixin } from '../lib/BoatTerminal';
import { CivicStructureMixin } from '../lib/CivicStructure';

export const BoatTerminalBundle = [
  BoatTerminalMixin as Mixin,
  CivicStructureMixin as Mixin];
