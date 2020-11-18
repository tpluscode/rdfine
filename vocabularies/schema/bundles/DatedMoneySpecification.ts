import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../lib/StructuredValue';
import { DatedMoneySpecificationMixin } from '../lib/DatedMoneySpecification';
import { MonetaryAmountMixin } from '../lib/MonetaryAmount';

export const DatedMoneySpecificationBundle = [
  StructuredValueMixin as Mixin,
  DatedMoneySpecificationMixin as Mixin,
  MonetaryAmountMixin as Mixin];
