import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AtlasMixin } from '../lib/Atlas';
import { CreativeWorkMixin } from '../lib/CreativeWork';

export const AtlasBundle = [
  AtlasMixin as Mixin,
  CreativeWorkMixin as Mixin];
