import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { DatasetMixin } from '../lib/Dataset';
import { DataCatalogMixin } from '../lib/DataCatalog';
import { DataDownloadMixin } from '../lib/DataDownload';
import { PropertyValueMixin } from '../lib/PropertyValue';

export const DatasetBundle = [
  CreativeWorkMixin as Mixin,
  DatasetMixin as Mixin,
  DataCatalogMixin as Mixin,
  DataDownloadMixin as Mixin,
  PropertyValueMixin as Mixin];
