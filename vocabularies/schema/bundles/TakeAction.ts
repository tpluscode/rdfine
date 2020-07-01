import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TransferActionMixin } from '../TransferAction';
import { TakeActionMixin } from '../TakeAction';

export const TakeActionBundle = [
  TransferActionMixin as Mixin,
  TakeActionMixin as Mixin];
