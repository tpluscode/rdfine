import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActionMixin } from '../lib/Action';
import { TransferActionMixin } from '../lib/TransferAction';
import { PlaceMixin } from '../lib/Place';

export const TransferActionBundle = [
  ActionMixin as Mixin,
  TransferActionMixin as Mixin,
  PlaceMixin as Mixin];
