import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TransferActionMixin } from '../lib/TransferAction';
import { TakeActionMixin } from '../lib/TakeAction';

export const TakeActionBundle = [
  TransferActionMixin as Mixin,
  TakeActionMixin as Mixin];
