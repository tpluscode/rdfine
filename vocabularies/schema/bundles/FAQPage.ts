import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { WebPageMixin } from '../WebPage';
import { FAQPageMixin } from '../FAQPage';

export const FAQPageBundle = [
  WebPageMixin as Mixin,
  FAQPageMixin as Mixin];
