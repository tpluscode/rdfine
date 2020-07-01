import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TransferActionMixin } from '../TransferAction';
import { DownloadActionMixin } from '../DownloadAction';

export const DownloadActionBundle = [
  TransferActionMixin as Mixin,
  DownloadActionMixin as Mixin];
