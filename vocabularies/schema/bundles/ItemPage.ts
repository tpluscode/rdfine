import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ItemPageMixin } from '../lib/ItemPage';
import { WebPageMixin } from '../lib/WebPage';

export const ItemPageBundle = [
  ItemPageMixin as Mixin,
  WebPageMixin as Mixin];
