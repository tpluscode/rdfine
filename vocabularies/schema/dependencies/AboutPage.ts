import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { WebPageMixin } from '../WebPage';
import { AboutPageMixin } from '../AboutPage';

export const AboutPageDependencies = [
  WebPageMixin as Mixin,
  AboutPageMixin as Mixin];
