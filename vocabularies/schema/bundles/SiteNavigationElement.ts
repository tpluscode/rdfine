import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { WebPageElementMixin } from '../lib/WebPageElement';
import { SiteNavigationElementMixin } from '../lib/SiteNavigationElement';

export const SiteNavigationElementBundle = [
  WebPageElementMixin as Mixin,
  SiteNavigationElementMixin as Mixin];
