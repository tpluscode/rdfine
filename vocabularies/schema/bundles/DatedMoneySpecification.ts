import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DatedMoneySpecificationMixin } from '../lib/DatedMoneySpecification';
import { MonetaryAmountMixin } from '../lib/MonetaryAmount';
import { StructuredValueMixin } from '../lib/StructuredValue';

export const DatedMoneySpecificationBundle = [
  DatedMoneySpecificationMixin as Mixin,
  MonetaryAmountMixin as Mixin,
  StructuredValueMixin as Mixin];
