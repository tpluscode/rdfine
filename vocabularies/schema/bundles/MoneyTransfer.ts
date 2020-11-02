import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TransferActionMixin } from '../TransferAction';
import { MoneyTransferMixin } from '../MoneyTransfer';
import { MonetaryAmountMixin } from '../MonetaryAmount';
import { BankOrCreditUnionMixin } from '../BankOrCreditUnion';

export const MoneyTransferBundle = [
  TransferActionMixin as Mixin,
  MoneyTransferMixin as Mixin,
  MonetaryAmountMixin as Mixin,
  BankOrCreditUnionMixin as Mixin];
