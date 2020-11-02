import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { PlayMixin } from '../Play';

export const PlayBundle = [
  CreativeWorkMixin as Mixin,
  PlayMixin as Mixin];
