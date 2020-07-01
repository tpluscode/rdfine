import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { WebPageMixin } from '../WebPage';
import { CollectionPageMixin } from '../CollectionPage';

export const CollectionPageBundle = [
  WebPageMixin as Mixin,
  CollectionPageMixin as Mixin];
