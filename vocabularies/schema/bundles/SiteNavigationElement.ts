import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SiteNavigationElementMixin } from '../lib/SiteNavigationElement';
import { WebPageElementMixin } from '../lib/WebPageElement';

export const SiteNavigationElementBundle = [
  SiteNavigationElementMixin as Mixin,
  WebPageElementMixin as Mixin];
