import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { WebPageMixin } from '../WebPage';
import { QAPageMixin } from '../QAPage';

export const QAPageBundle = [
  WebPageMixin as Mixin,
  QAPageMixin as Mixin];
