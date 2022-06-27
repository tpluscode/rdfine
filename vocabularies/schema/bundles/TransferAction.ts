import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActionMixin } from '../lib/Action';
import { PlaceMixin } from '../lib/Place';
import { TransferActionMixin } from '../lib/TransferAction';

export const TransferActionBundle = [
  ActionMixin as Mixin,
  PlaceMixin as Mixin,
  TransferActionMixin as Mixin];
