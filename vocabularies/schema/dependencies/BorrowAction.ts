import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TransferActionMixin } from '../TransferAction';
import { BorrowActionMixin } from '../BorrowAction';
import { OrganizationMixin } from '../Organization';
import { PersonMixin } from '../Person';

export const BorrowActionDependencies = [
  TransferActionMixin as Mixin,
  BorrowActionMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin];
