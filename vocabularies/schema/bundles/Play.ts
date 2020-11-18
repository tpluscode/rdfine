import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { PlayMixin } from '../lib/Play';

export const PlayBundle = [
  CreativeWorkMixin as Mixin,
  PlayMixin as Mixin];
