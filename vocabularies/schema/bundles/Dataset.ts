import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { DataCatalogMixin } from '../lib/DataCatalog';
import { DataDownloadMixin } from '../lib/DataDownload';
import { DatasetMixin } from '../lib/Dataset';
import { PropertyValueMixin } from '../lib/PropertyValue';

export const DatasetBundle = [
  CreativeWorkMixin as Mixin,
  DataCatalogMixin as Mixin,
  DataDownloadMixin as Mixin,
  DatasetMixin as Mixin,
  PropertyValueMixin as Mixin];
