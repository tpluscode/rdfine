import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { PhotographMixin } from '../lib/Photograph';

export const PhotographBundle = [
  CreativeWorkMixin as Mixin,
  PhotographMixin as Mixin];
