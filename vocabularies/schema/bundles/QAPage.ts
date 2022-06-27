import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { QAPageMixin } from '../lib/QAPage';
import { WebPageMixin } from '../lib/WebPage';

export const QAPageBundle = [
  QAPageMixin as Mixin,
  WebPageMixin as Mixin];
