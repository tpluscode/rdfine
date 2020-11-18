import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { WebContentMixin } from '../lib/WebContent';

export const WebContentBundle = [
  CreativeWorkMixin as Mixin,
  WebContentMixin as Mixin];
