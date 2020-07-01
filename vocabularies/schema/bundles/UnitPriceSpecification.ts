import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PriceSpecificationMixin } from '../PriceSpecification';
import { UnitPriceSpecificationMixin } from '../UnitPriceSpecification';
import { QuantitativeValueMixin } from '../QuantitativeValue';

export const UnitPriceSpecificationBundle = [
  PriceSpecificationMixin as Mixin,
  UnitPriceSpecificationMixin as Mixin,
  QuantitativeValueMixin as Mixin];
