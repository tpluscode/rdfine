import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LendActionMixin } from '../lib/LendAction';
import { PersonMixin } from '../lib/Person';
import { TransferActionMixin } from '../lib/TransferAction';

export const LendActionBundle = [
  LendActionMixin as Mixin,
  PersonMixin as Mixin,
  TransferActionMixin as Mixin];
