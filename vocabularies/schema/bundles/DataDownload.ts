import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MediaObjectMixin } from '../MediaObject';
import { DataDownloadMixin } from '../DataDownload';

export const DataDownloadBundle = [
  MediaObjectMixin as Mixin,
  DataDownloadMixin as Mixin];
