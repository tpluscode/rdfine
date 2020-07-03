import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { WebPageElementMixin } from '../WebPageElement';
import { SiteNavigationElementMixin } from '../SiteNavigationElement';

export const SiteNavigationElementBundle = [
  WebPageElementMixin as Mixin,
  SiteNavigationElementMixin as Mixin];
