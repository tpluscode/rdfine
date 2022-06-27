import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DownloadActionMixin } from '../lib/DownloadAction';
import { TransferActionMixin } from '../lib/TransferAction';

export const DownloadActionBundle = [
  DownloadActionMixin as Mixin,
  TransferActionMixin as Mixin];
