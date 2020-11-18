import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { WebPageMixin } from '../lib/WebPage';
import { FAQPageMixin } from '../lib/FAQPage';

export const FAQPageBundle = [
  WebPageMixin as Mixin,
  FAQPageMixin as Mixin];
