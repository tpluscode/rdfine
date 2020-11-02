import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { DatasetMixin } from '../Dataset';
import { DataCatalogMixin } from '../DataCatalog';
import { DataDownloadMixin } from '../DataDownload';
import { PropertyValueMixin } from '../PropertyValue';

export const DatasetBundle = [
  CreativeWorkMixin as Mixin,
  DatasetMixin as Mixin,
  DataCatalogMixin as Mixin,
  DataDownloadMixin as Mixin,
  PropertyValueMixin as Mixin];
