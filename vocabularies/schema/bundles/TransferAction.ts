import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActionMixin } from '../Action';
import { TransferActionMixin } from '../TransferAction';
import { PlaceMixin } from '../Place';

export const TransferActionBundle = [
  ActionMixin as Mixin,
  TransferActionMixin as Mixin,
  PlaceMixin as Mixin];
