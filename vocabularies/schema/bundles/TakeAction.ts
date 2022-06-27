import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TakeActionMixin } from '../lib/TakeAction';
import { TransferActionMixin } from '../lib/TransferAction';

export const TakeActionBundle = [
  TakeActionMixin as Mixin,
  TransferActionMixin as Mixin];
