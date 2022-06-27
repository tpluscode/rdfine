import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CollectionPageMixin } from '../lib/CollectionPage';
import { WebPageMixin } from '../lib/WebPage';

export const CollectionPageBundle = [
  CollectionPageMixin as Mixin,
  WebPageMixin as Mixin];
