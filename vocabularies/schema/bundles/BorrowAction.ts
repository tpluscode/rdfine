import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TransferActionMixin } from '../lib/TransferAction';
import { BorrowActionMixin } from '../lib/BorrowAction';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';

export const BorrowActionBundle = [
  TransferActionMixin as Mixin,
  BorrowActionMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin];
