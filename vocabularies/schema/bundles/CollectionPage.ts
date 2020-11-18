import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { WebPageMixin } from '../lib/WebPage';
import { CollectionPageMixin } from '../lib/CollectionPage';

export const CollectionPageBundle = [
  WebPageMixin as Mixin,
  CollectionPageMixin as Mixin];
