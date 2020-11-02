import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { AtlasMixin } from '../Atlas';

export const AtlasBundle = [
  CreativeWorkMixin as Mixin,
  AtlasMixin as Mixin];
