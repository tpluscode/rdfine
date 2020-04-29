import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { WebPageMixin } from '../WebPage';
import { CollectionPageMixin } from '../CollectionPage';

export const CollectionPageDependencies = [
  WebPageMixin as Mixin,
  CollectionPageMixin as Mixin];
