import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { WebSiteMixin } from '../lib/WebSite';

export const WebSiteBundle = [
  CreativeWorkMixin as Mixin,
  WebSiteMixin as Mixin];
