import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TransferActionMixin } from '../TransferAction';
import { LendActionMixin } from '../LendAction';
import { PersonMixin } from '../Person';

export const LendActionBundle = [
  TransferActionMixin as Mixin,
  LendActionMixin as Mixin,
  PersonMixin as Mixin];
