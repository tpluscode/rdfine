import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PaymentChargeSpecificationMixin } from '../lib/PaymentChargeSpecification';
import { PriceSpecificationMixin } from '../lib/PriceSpecification';

export const PaymentChargeSpecificationBundle = [
  PaymentChargeSpecificationMixin as Mixin,
  PriceSpecificationMixin as Mixin];
