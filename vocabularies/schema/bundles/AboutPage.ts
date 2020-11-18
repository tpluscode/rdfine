import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { WebPageMixin } from '../lib/WebPage';
import { AboutPageMixin } from '../lib/AboutPage';

export const AboutPageBundle = [
  WebPageMixin as Mixin,
  AboutPageMixin as Mixin];
