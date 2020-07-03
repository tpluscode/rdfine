import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { SculptureMixin } from '../Sculpture';

export const SculptureBundle = [
  CreativeWorkMixin as Mixin,
  SculptureMixin as Mixin];
