import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { WebContentMixin } from '../WebContent';

export const WebContentBundle = [
  CreativeWorkMixin as Mixin,
  WebContentMixin as Mixin];
