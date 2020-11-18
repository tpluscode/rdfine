import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { AtlasMixin } from '../lib/Atlas';

export const AtlasBundle = [
  CreativeWorkMixin as Mixin,
  AtlasMixin as Mixin];
