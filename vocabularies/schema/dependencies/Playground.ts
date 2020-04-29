import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../CivicStructure';
import { PlaygroundMixin } from '../Playground';

export const PlaygroundDependencies = [
  CivicStructureMixin as Mixin,
  PlaygroundMixin as Mixin];
