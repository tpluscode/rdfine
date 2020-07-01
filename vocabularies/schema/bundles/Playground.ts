import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../CivicStructure';
import { PlaygroundMixin } from '../Playground';

export const PlaygroundBundle = [
  CivicStructureMixin as Mixin,
  PlaygroundMixin as Mixin];
