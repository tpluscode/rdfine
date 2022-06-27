import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BorrowActionMixin } from '../lib/BorrowAction';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { TransferActionMixin } from '../lib/TransferAction';

export const BorrowActionBundle = [
  BorrowActionMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  TransferActionMixin as Mixin];
