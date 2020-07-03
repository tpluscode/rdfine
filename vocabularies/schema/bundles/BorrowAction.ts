import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TransferActionMixin } from '../TransferAction';
import { BorrowActionMixin } from '../BorrowAction';
import { OrganizationMixin } from '../Organization';
import { PersonMixin } from '../Person';

export const BorrowActionBundle = [
  TransferActionMixin as Mixin,
  BorrowActionMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin];
