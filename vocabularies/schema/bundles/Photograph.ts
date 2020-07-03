import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { PhotographMixin } from '../Photograph';

export const PhotographBundle = [
  CreativeWorkMixin as Mixin,
  PhotographMixin as Mixin];
