import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MediaObjectMixin } from '../lib/MediaObject';
import { DataDownloadMixin } from '../lib/DataDownload';

export const DataDownloadBundle = [
  MediaObjectMixin as Mixin,
  DataDownloadMixin as Mixin];
