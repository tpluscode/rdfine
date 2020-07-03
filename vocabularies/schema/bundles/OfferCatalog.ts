import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ItemListMixin } from '../ItemList';
import { OfferCatalogMixin } from '../OfferCatalog';

export const OfferCatalogBundle = [
  ItemListMixin as Mixin,
  OfferCatalogMixin as Mixin];
