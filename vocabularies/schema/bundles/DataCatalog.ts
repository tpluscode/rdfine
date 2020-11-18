import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { DataCatalogMixin } from '../lib/DataCatalog';
import { DatasetMixin } from '../lib/Dataset';

export const DataCatalogBundle = [
  CreativeWorkMixin as Mixin,
  DataCatalogMixin as Mixin,
  DatasetMixin as Mixin];
