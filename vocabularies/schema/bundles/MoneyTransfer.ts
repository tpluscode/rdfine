import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TransferActionMixin } from '../lib/TransferAction';
import { MoneyTransferMixin } from '../lib/MoneyTransfer';
import { MonetaryAmountMixin } from '../lib/MonetaryAmount';
import { BankOrCreditUnionMixin } from '../lib/BankOrCreditUnion';

export const MoneyTransferBundle = [
  TransferActionMixin as Mixin,
  MoneyTransferMixin as Mixin,
  MonetaryAmountMixin as Mixin,
  BankOrCreditUnionMixin as Mixin];
