import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AboutPageMixin } from '../lib/AboutPage';
import { WebPageMixin } from '../lib/WebPage';

export const AboutPageBundle = [
  AboutPageMixin as Mixin,
  WebPageMixin as Mixin];
