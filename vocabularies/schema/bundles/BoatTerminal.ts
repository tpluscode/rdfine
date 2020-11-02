import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../CivicStructure';
import { BoatTerminalMixin } from '../BoatTerminal';

export const BoatTerminalBundle = [
  CivicStructureMixin as Mixin,
  BoatTerminalMixin as Mixin];
