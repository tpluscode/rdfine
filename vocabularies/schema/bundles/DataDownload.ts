import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DataDownloadMixin } from '../lib/DataDownload';
import { MediaObjectMixin } from '../lib/MediaObject';

export const DataDownloadBundle = [
  DataDownloadMixin as Mixin,
  MediaObjectMixin as Mixin];
