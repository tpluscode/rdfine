import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PriceSpecificationMixin } from '../PriceSpecification';
import { PaymentChargeSpecificationMixin } from '../PaymentChargeSpecification';

export const PaymentChargeSpecificationDependencies = [
  PriceSpecificationMixin as Mixin,
  PaymentChargeSpecificationMixin as Mixin];
