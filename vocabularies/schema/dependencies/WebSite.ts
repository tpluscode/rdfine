import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { WebSiteMixin } from '../WebSite';

export const WebSiteDependencies = [
  CreativeWorkMixin as Mixin,
  WebSiteMixin as Mixin];
