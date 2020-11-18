import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../lib/StructuredValue';
import { RepaymentSpecificationMixin } from '../lib/RepaymentSpecification';
import { MonetaryAmountMixin } from '../lib/MonetaryAmount';

export const RepaymentSpecificationBundle = [
  StructuredValueMixin as Mixin,
  RepaymentSpecificationMixin as Mixin,
  MonetaryAmountMixin as Mixin];
