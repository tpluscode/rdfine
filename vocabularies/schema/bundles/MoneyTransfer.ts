import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BankOrCreditUnionMixin } from '../lib/BankOrCreditUnion';
import { MonetaryAmountMixin } from '../lib/MonetaryAmount';
import { MoneyTransferMixin } from '../lib/MoneyTransfer';
import { TransferActionMixin } from '../lib/TransferAction';

export const MoneyTransferBundle = [
  BankOrCreditUnionMixin as Mixin,
  MonetaryAmountMixin as Mixin,
  MoneyTransferMixin as Mixin,
  TransferActionMixin as Mixin];
