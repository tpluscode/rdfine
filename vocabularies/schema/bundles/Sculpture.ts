import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { SculptureMixin } from '../lib/Sculpture';

export const SculptureBundle = [
  CreativeWorkMixin as Mixin,
  SculptureMixin as Mixin];
