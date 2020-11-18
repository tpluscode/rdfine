import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TransferActionMixin } from '../lib/TransferAction';
import { LendActionMixin } from '../lib/LendAction';
import { PersonMixin } from '../lib/Person';

export const LendActionBundle = [
  TransferActionMixin as Mixin,
  LendActionMixin as Mixin,
  PersonMixin as Mixin];
