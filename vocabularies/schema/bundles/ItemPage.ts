import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { WebPageMixin } from '../WebPage';
import { ItemPageMixin } from '../ItemPage';

export const ItemPageBundle = [
  WebPageMixin as Mixin,
  ItemPageMixin as Mixin];
