import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ItemListMixin } from '../lib/ItemList';
import { OfferCatalogMixin } from '../lib/OfferCatalog';

export const OfferCatalogBundle = [
  ItemListMixin as Mixin,
  OfferCatalogMixin as Mixin];
