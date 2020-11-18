import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TransferActionMixin } from '../lib/TransferAction';
import { DownloadActionMixin } from '../lib/DownloadAction';

export const DownloadActionBundle = [
  TransferActionMixin as Mixin,
  DownloadActionMixin as Mixin];
