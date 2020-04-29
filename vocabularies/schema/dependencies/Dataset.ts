import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { DatasetMixin } from '../Dataset';
import { DataCatalogMixin } from '../DataCatalog';
import { DataDownloadMixin } from '../DataDownload';

export const DatasetDependencies = [
  CreativeWorkMixin as Mixin,
  DatasetMixin as Mixin,
  DataCatalogMixin as Mixin,
  DataDownloadMixin as Mixin];
