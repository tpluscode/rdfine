import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PriceSpecificationMixin } from '../PriceSpecification';
import { PaymentChargeSpecificationMixin } from '../PaymentChargeSpecification';

export const PaymentChargeSpecificationBundle = [
  PriceSpecificationMixin as Mixin,
  PaymentChargeSpecificationMixin as Mixin];
