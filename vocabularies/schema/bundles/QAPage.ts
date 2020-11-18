import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { WebPageMixin } from '../lib/WebPage';
import { QAPageMixin } from '../lib/QAPage';

export const QAPageBundle = [
  WebPageMixin as Mixin,
  QAPageMixin as Mixin];
