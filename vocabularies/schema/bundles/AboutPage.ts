import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { WebPageMixin } from '../WebPage';
import { AboutPageMixin } from '../AboutPage';

export const AboutPageBundle = [
  WebPageMixin as Mixin,
  AboutPageMixin as Mixin];
