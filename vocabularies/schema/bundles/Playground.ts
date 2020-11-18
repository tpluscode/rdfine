import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../lib/CivicStructure';
import { PlaygroundMixin } from '../lib/Playground';

export const PlaygroundBundle = [
  CivicStructureMixin as Mixin,
  PlaygroundMixin as Mixin];
