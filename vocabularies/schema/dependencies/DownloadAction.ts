import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TransferActionMixin } from '../TransferAction';
import { DownloadActionMixin } from '../DownloadAction';

export const DownloadActionDependencies = [
  TransferActionMixin as Mixin,
  DownloadActionMixin as Mixin];
