import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { WebSiteMixin } from '../WebSite';

export const WebSiteBundle = [
  CreativeWorkMixin as Mixin,
  WebSiteMixin as Mixin];
