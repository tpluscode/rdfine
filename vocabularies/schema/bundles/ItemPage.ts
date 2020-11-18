import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { WebPageMixin } from '../lib/WebPage';
import { ItemPageMixin } from '../lib/ItemPage';

export const ItemPageBundle = [
  WebPageMixin as Mixin,
  ItemPageMixin as Mixin];
