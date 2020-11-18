import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { WebPageElementMixin } from '../lib/WebPageElement';

export const WebPageElementBundle = [
  CreativeWorkMixin as Mixin,
  WebPageElementMixin as Mixin];
