import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { WebPageMixin } from '../WebPage';
import { FAQPageMixin } from '../FAQPage';

export const FAQPageDependencies = [
  WebPageMixin as Mixin,
  FAQPageMixin as Mixin];
