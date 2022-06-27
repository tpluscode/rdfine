import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FAQPageMixin } from '../lib/FAQPage';
import { WebPageMixin } from '../lib/WebPage';

export const FAQPageBundle = [
  FAQPageMixin as Mixin,
  WebPageMixin as Mixin];
