import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MonetaryAmountMixin } from '../lib/MonetaryAmount';
import { RepaymentSpecificationMixin } from '../lib/RepaymentSpecification';
import { StructuredValueMixin } from '../lib/StructuredValue';

export const RepaymentSpecificationBundle = [
  MonetaryAmountMixin as Mixin,
  RepaymentSpecificationMixin as Mixin,
  StructuredValueMixin as Mixin];
