import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../StructuredValue';
import { DatedMoneySpecificationMixin } from '../DatedMoneySpecification';
import { MonetaryAmountMixin } from '../MonetaryAmount';

export const DatedMoneySpecificationDependencies = [
  StructuredValueMixin as Mixin,
  DatedMoneySpecificationMixin as Mixin,
  MonetaryAmountMixin as Mixin];
