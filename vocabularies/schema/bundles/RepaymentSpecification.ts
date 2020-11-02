import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../StructuredValue';
import { RepaymentSpecificationMixin } from '../RepaymentSpecification';
import { MonetaryAmountMixin } from '../MonetaryAmount';

export const RepaymentSpecificationBundle = [
  StructuredValueMixin as Mixin,
  RepaymentSpecificationMixin as Mixin,
  MonetaryAmountMixin as Mixin];
